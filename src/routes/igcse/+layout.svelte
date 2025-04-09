<script>
  import Contents from '$lib/components/Contents.svelte'
  import { page } from '$app/stores'
</script>

{#key $page.url.pathname}
  <Contents></Contents>
{/key}

<slot></slot>
