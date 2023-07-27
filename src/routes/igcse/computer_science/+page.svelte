<script lang="ts">
  import { listLinks, type Link } from '$lib/utils/links'

  export let data

  let links: Link[] = listLinks(data.url, import.meta.glob('./**/+page.svelte'))

  let page = 'IGCSE Computer Science'
</script>

<svelte:head>
	<title>{page}</title>
	<meta property="og:title" content={page}>
	<meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Computer Science</h1>
  <h2>Syllabus</h2>
  <p>In 2023, the pre-release material was removed from the course along with the security and ethics chapter.</p>
  <h2>Link Tree</h2>
  <ul>
    {#each links as link}
      <li>
        <a href={link.url}>{link.name}</a>
      </li>
    {/each}
  </ul>
</section>