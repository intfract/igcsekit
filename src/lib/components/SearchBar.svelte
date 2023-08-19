<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'

  import { listFiles, matches, type SearchResult } from '$lib/utils/files'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  export let glob: Record<string, string>
  export let results: SearchResult[]
  export let focused: boolean = false
  
  let query: string = ''
  let items: SearchResult[]

  function handleInput(e: CustomEvent<any>) {
    if (!query) return results = items
    focused = true
    return results = items.filter(item => matches(item, query))
  }

  function handleKeyDown(e: any) {
    if (e.key === 'Enter') goto('/' + results[0].link)
    else if (e.key === 'ArrowDown') focused = true
  }

  onMount(() => {
    items = listFiles(glob)
    results = items
  })
</script>

<div class="search">
  <Textfield bind:value={query} variant="filled" label="Search" on:input={handleInput} on:keydown={handleKeyDown}></Textfield>
</div>