<script lang="ts">
  import { listLinks, type Link } from '$lib/utils/links'

  export let url: string
  export let glob: Record<string, () => Promise<unknown>>

  let links: Link[] = listLinks(url, glob)
</script>

<h2>Link Tree</h2>
<ul>
  {#each links as link}
    <li>
      <a href={link.url}>{link.name}</a>
    </li>
    {#if link.sub.length}
      <ul>
        {#each link.sub as sub}
          <li>
            <a href={sub.url}>{sub.name}</a>
          </li>
        {/each}
      </ul>
    {/if}
  {/each}
</ul>