<script lang="ts">
  import Button, { Label } from '@smui/button'

  export let code: string
</script>

<div class="block">
  <div class="code">
    <pre>{code}</pre>
  </div>
  <div class="buttons">
    <Button variant="raised">
      <Label>Run</Label>
    </Button>
  </div>
</div>

<style>
  .block div {
    margin-block: 0.5em;
  }
  .code {
    box-sizing: border-box;
    padding: 16px;
    background-color: var(--mdc-theme-text-primary-on-background);
    color: var(--mdc-theme-text-primary-on-dark);
    border-radius: 4px;
  }

  .code pre {
    margin: 0;
  }
</style>