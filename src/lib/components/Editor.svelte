<script lang="ts">
  import { Compiler } from '$lib/utils/compiler'

  import Button, { Label, Icon } from '@smui/button'
  import Textfield from '@smui/textfield'

  let terminal: string = ''
  let value: string = ''
  let index: number = 0
  let inputted: boolean = false

  const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor // declare AsyncFunction constructor

  export let runnable: boolean = false

  let code: string = 'OUTPUT "Hello, world!"'
  $: code
  let focused = false

  const compiler = new Compiler(code)  
  let highlightedCode: string = compiler.style() + '|'
  $: highlightedCode

  function focus(state: boolean) {
    focused = state
  }

  function keydown(e: KeyboardEvent) {
    if (!focused) return
    if (e.key.length === 1) code += e.key
    else if (e.key === 'Enter') code += '\n'
    else if (e.key === 'Backspace') code = code.substring(0, code.length - 1)
    compiler.code = code
    highlightedCode = compiler.style() + '|'
  }

  function output(...args: string[]) {
    let s = ''
    args.forEach(arg => s += arg)
    terminal += s + '\n'
  }

  const timeout = async (ms: number) => new Promise(res => setTimeout(res, ms))
  async function input() {
    while (!inputted) await timeout(1)
    inputted = false
    return value
  }

  async function run(code: string) {
    terminal = ''
    index = 0
    const lib = {
      input,
      output,
    }
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
  <div class="code" on:focusin={e => focus(true)} on:focusout={e => focus(false)} on:keydown={keydown} tabindex="0">
    <pre>{@html highlightedCode}</pre>
  </div>
  {#if runnable}
    <div class="buttons">
      <Button variant="raised" on:click={e => run(code)}>
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
  {/if}
</div>

<style>
  .block div {
    margin-block: 0.5em;
  }

  .code, .terminal {
    box-sizing: border-box;
    padding: 16px;
    background-color: var(--mdc-theme-text-primary-on-background);
    color: var(--mdc-theme-text-primary-on-dark);
    border-radius: 4px;
  }

  pre {
    margin: 0;
    tab-size: 4;
    font-family: 'Google Sans Mono';
  }
</style>