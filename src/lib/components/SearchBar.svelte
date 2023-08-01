<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'

  export let glob: Record<string, () => Promise<unknown>>
  
  let query: string = ''

  function handleInput(e: CustomEvent<any>) {
    console.log(e)
  }
</script>

<div class="search">
  <Textfield bind:value={query} variant="filled" label="Search" on:input={handleInput}></Textfield>
</div>