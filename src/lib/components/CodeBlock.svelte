<script lang="ts">
  import { Compiler } from '$lib/utils/compiler'

  import Button, { Label, Icon } from '@smui/button'
  import Textfield from '@smui/textfield'

  let terminal: string = ''
  let value: string = ''
  let index: number = 0
  let inputted: boolean = false

  const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor // declare AsyncFunction constructor

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
    const compiler = new Compiler(code)
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

  export let code: string
  export let runnable: boolean
</script>

<div class="block">
  <div class="code">
    <pre>{code}</pre>
  </div>
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