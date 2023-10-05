<script lang="ts">
  import { Compiler } from '$lib/utils/compiler'

  import Button, { Label, Icon } from '@smui/button'
  import Textfield from '@smui/textfield'

  let vars: Record<string, any> = {}
  let terminal: string = ''
  let value: string = ''
  let index: number = 0
  let inputted: boolean = false

  function output(...args: string[]) {
    let s = ''
    args.forEach(arg => s += arg)
    terminal += s
  }

  const timeout = async (ms: number) => new Promise(res => setTimeout(res, ms))
  async function waitForInput() {
    while (!inputted) await timeout(1)
    inputted = false
    return value
  }

  async function run(code: string) {
    terminal = ''
    index = 0
    // dummy compiled pseudocode
    const Name = await waitForInput()
    output("Hello, ", Name, "!")
  }

  function submit(e: any) {
    if (e.key !== 'Enter') return
    terminal += value + '\n'
    inputted = true
  }

  export let code: string
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
  }
</style>