<script lang="ts">
  import Button, { Label } from '@smui/button'

  let terminal: string = ''

  function execute(code: string) {
    terminal = 'Hello, world!'
  }

  export let code: string
</script>

<div class="block">
  <div class="code">
    <pre>{code}</pre>
  </div>
  <div class="buttons">
    <Button variant="raised" on:click={e => execute(code)}>
      <Label>Run</Label>
    </Button>
  </div>
  <div class="terminal">
    <pre>{terminal}</pre>
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