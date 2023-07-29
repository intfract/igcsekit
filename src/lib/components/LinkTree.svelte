<script lang="ts">
  import { createLinkTree, type Link } from '$lib/utils/links'

  export let url: string
  export let glob: Record<string, () => Promise<unknown>>
</script>

<h2>Link Tree</h2>
{@html createLinkTree(Object.keys(glob), url)}