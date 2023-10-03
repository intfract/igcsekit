<script lang="ts">
  import Button, { Label, Icon } from '@smui/button'
  import Textfield from '@smui/textfield'

  let vars: Record<string, any> = {}
  let terminal: string = ''
  let value: string = ''
  let index: number = 0

  function output(...args: string[]) {
    let s = ''
    args.forEach(arg => s += arg)
    terminal += s
  }

  let tasks: Function[] = [
    (vars: Record<string, any>, input: string) => {
      vars['name'] = input
      output("Hello ", vars['name'], "!")
    },
  ] // dummy pseudocode compilation

  function run(code: string) {
    terminal = ''
    // compile pseudocode to tasks
  }

  function submit(e: any) {
    if (e.key !== 'Enter') return
    terminal += value + '\n'
    const task = tasks[index]
    if (task) {
      task(vars, value)
      index++
    }
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