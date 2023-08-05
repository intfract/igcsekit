<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'

  import { listResults, type SearchResult } from '$lib/utils/files'

  export let glob: Record<string, string>
  export let results: SearchResult[]
  
  let query: string = ''

  function handleInput(e: CustomEvent<any>) {
    if (!query) return
    results = listResults(glob)
  }
</script>

<div class="search">
  <Textfield bind:value={query} variant="filled" label="Search" on:input={handleInput}></Textfield>
</div>