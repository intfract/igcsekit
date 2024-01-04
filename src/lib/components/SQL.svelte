<script lang="ts">
  import Button, { Label, Icon } from '@smui/button'

  function run(code: string) {
    // interpret sql
  }

  export let code: string
  export let runnable: boolean = false

  let highlightedCode = code
  let terminal = ''
  let value = ''
</script>

<div class="block">
  <div class="code">
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