<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'

  import { listFiles, matches, type SearchResult } from '$lib/utils/files'
  import { onMount } from 'svelte'

  export let glob: Record<string, string>
  export let results: SearchResult[]
  export let focused: boolean = false
  
  let query: string = ''
  let items: SearchResult[]

  function handleInput(e: CustomEvent<any>) {
    if (!query) return results = items
    return results = items.filter(item => matches(item, query))
  }

  onMount(() => {
    items = listFiles(glob)
    results = items
  })
</script>

<div class="search" on:focusin={() => focused = true} on:focusout={() => focused = false}>
  <Textfield bind:value={query} variant="filled" label="Search" on:input={handleInput}></Textfield>
</div>