<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api'
  import { Compiler } from '$lib/utils/compiler'
  import Button, { Label, Icon } from '@smui/button'
  import Textfield from '@smui/textfield'
  import Tab, { Label as TabLabel } from '@smui/tab'
  import TabBar from '@smui/tab-bar'
  import Paper, { Content } from '@smui/paper'

  let terminal: string = ''
  let value: string = ''
  let inputted: boolean = false

  const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor // declare AsyncFunction constructor

  function output(...args: string[]) {
    let s = ''
    args.forEach(arg => s += arg)
    terminal += s + '\n'
  }

  function read(fileName: string) {
    return files[fileName]
  }

  function write(fileName: string, content: string) {
    files[fileName] = content
  }

  const timeout = async (ms: number) => new Promise(res => setTimeout(res, ms))
  async function input() {
    while (!inputted) await timeout(1)
    inputted = false
    return value
  }

  let editor: Monaco.editor.IStandaloneCodeEditor
  let monaco: typeof Monaco
  let editorContainer: HTMLElement

  let reactiveEditor: Monaco.editor.IStandaloneCodeEditor
  $: reactiveEditor

  let code = 'DECLARE Items : ARRAY\nPROCEDURE Swap\n\tTemp ← Items[Index]\n\tItems[Index] ← Items[Index + 1]\n\tItems[Index + 1] ← Temp\n\tSwapped ← TRUE\nENDPROCEDURE\nN ← 0\nItem ← ""\nREPEAT\n\tOUTPUT "Enter an item or leave blank to begin sorting."\n\tINPUT Item\n\tIF Item <> "" THEN\n\t\tN ← N + 1\n\t\tItems[N] ← Item\n\tENDIF\n\tLength ← N\nUNTIL Item = ""\nSwapped ← TRUE\nWHILE N > 1 AND Swapped DO\n\tSwapped ← FALSE\n\tN ← N - 1\n\tFOR Index ← 1 TO N\n\t\tIF Items[Index] > Items[Index + 1] THEN\n\t\t\tCALL Swap\n\t\tENDIF\n\tNEXT\nENDWHILE\nOUTPUT Length, " items have been sorted!"\nFOR Index ← 1 TO Length\n\tOUTPUT Items[Index]\nNEXT'
  export let files: Record<string, string | null> = {}
  let active: string = Object.keys(files)[0]

  const compiler = new Compiler(code)

  onMount(async () => {
    const keywords = [...compiler.keywords, ...compiler.blocks, ...compiler.blocks.map(x => 'end' + x), ...compiler.assignment, ...Object.keys(compiler.maps.js)]
    monaco = (await import('$lib/monaco/monaco')).default
    monaco.languages.register({ id: 'pseudocode' })
    monaco.languages.setMonarchTokensProvider('pseudocode', {
      ignoreCase: true,
      keywords,
      operators: compiler.operators,
      tokenizer: {
        root: [
          [
            /@?[a-zA-Z][\w$]*/,
            {
              cases: {
                '@keywords': 'keyword',
                '@default': 'variable',
              }
            },
          ],
          [
            /".*?"/,
            'string',
          ],
          [
            /[-:<=>+*/&|!^←]+/,
            'operator',
          ],
          [
            /[\[\](){}]+/,
            'bracket',
          ],
        ]
      }
    })
    monaco.editor.defineTheme('igcsekit', {
      base: 'vs-dark',
      rules: [
        { token: 'keyword', foreground: '#2c6fef', fontStyle: 'bold' },
        { token: 'variable', foreground: '#ffffff' },
        { token: 'string', foreground: '#ffbb80' },
        { token: 'operator', foreground: '#40dddd' },
        { token: 'bracket', foreground: '#bb40ff' },
      ],
      inherit: true,
      colors: {
        'editor.background': '#000000',
        'editor.lineHighlightBackground': '#2c6fef20',
        'editor.lineHighlightBorder': '#000000',
      }
    })
    const editor = monaco.editor.create(editorContainer, { theme: 'igcsekit' })
    const model = monaco.editor.createModel(
      code,
      'pseudocode'
    )
    monaco.languages.registerCompletionItemProvider('pseudocode', {
      provideCompletionItems: (model, position, context, token) => {
        const word = model.getWordUntilPosition(position)
        return {
          suggestions: [
            ...keywords.map(keyword => {
              return {
                label: keyword.toUpperCase(),
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: keyword.toUpperCase(),
                range: {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: word.startColumn,
                  endColumn: word.endColumn,
                }
              }
            })
          ]
        }
      },
    })
    editor.setModel(model)
    reactiveEditor = editor
  })

  onDestroy(() => {
    monaco?.editor.getModels().forEach((model) => model.dispose())
    editor?.dispose()
  })

  async function run() {
    terminal = ''
    const lib = {
      input,
      output,
      read,
      write,
      eval: null,
      Function: null,
    }
    compiler.code = reactiveEditor.getValue()
    const js = compiler.compile()
    console.log(js)
    const { variables } = compiler
    const f = new AsyncFunction(...Object.keys(lib), ...variables, js)
    try {
      const y = f(...Object.values(lib), ...(new Array(variables.length)))
      const error = await y
      console.log(error)
      if (error) {
        terminal += error
      }
    } catch (e) {
      console.log(e)
    }
  }

  function submit(e: any) {
    if (e.key !== 'Enter') return
    terminal += value + '\n'
    inputted = true
  }
</script>

<div class="block">
  <div class="container" bind:this={editorContainer} />
  <div class="buttons">
    <Button variant="raised" on:click={e => run()}>
      <Icon class="material-symbols-rounded">play_arrow</Icon>
      <Label>Run</Label>
    </Button>
  </div>
  <div class="terminal">
    <pre>{terminal}</pre>
  </div>
  <div class="input">
    <Textfield label="Input" bind:value on:keydown={e => submit(e)} style="width: 100%;"></Textfield>
  </div>
  {#if Object.keys(files).length > 0}
    <div class="files">
      <TabBar tabs={Object.keys(files)} let:tab bind:active>
        <Tab {tab}>
          <TabLabel>{tab}</TabLabel>
        </Tab>
      </TabBar>
      <Paper variant="raised">
        <Content>
          <pre class={files[active] ? '' : 'error'}>{files[active] ?? 'EMPTY'}</pre>
        </Content>
      </Paper>
    </div>
  {/if}
</div>

<style>
  .block div {
    margin-block: 0.5em;
  }

  .container {
    width: 100%;
    height: 600px;
    border-radius: 4px;
    overflow: hidden;
  }

  .terminal {
    box-sizing: border-box;
    padding: 16px;
    background-color: #000;
    color: var(--mdc-theme-text-primary-on-dark);
    border-radius: 4px;
  }

  pre {
    margin: 0;
    tab-size: 4;
    font-family: 'Google Sans Mono';
  }
</style>