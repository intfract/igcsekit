<script>
  import Contents from '$lib/components/Contents.svelte'
  import { page } from '$app/stores'
</script>

{#key $page.url.pathname}
  {#if $page.url.pathname.substring(1).split('/').length === 3}
    <Contents glob={import.meta.glob('./**/+page.svelte', { eager: true })}></Contents>
  {/if}
{/key}

<slot></slot>
