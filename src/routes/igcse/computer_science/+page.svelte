<script lang="ts">
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

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
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>