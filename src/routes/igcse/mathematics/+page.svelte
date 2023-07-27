<script lang="ts">
  import { listLinks, type Link } from '$lib/utils/links'

  export let data

  let links: Link[] = listLinks(data.url, import.meta.glob('./**/+page.svelte'))
</script>

<section>
  <h1>Mathematics</h1>
  <h2>Syllabus</h2>
  <p>The IGCSE syllabus contains precalculus content.</p>
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
</section>