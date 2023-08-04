<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'

  import { listResults } from '$lib/utils/files'

  export let glob: Record<string, string>
  
  let query: string = ''

  function handleInput(e: CustomEvent<any>) {
    if (!query) return
    console.log(listResults(glob))
  }
</script>

<div class="search">
  <Textfield bind:value={query} variant="filled" label="Search" on:input={handleInput}></Textfield>
</div>