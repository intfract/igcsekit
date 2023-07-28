<script lang="ts">
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let page = 'IGCSE Mathematics'
</script>

<svelte:head>
	<title>{page}</title>
	<meta property="og:title" content={page}>
	<meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Mathematics</h1>
  <h2>Syllabus</h2>
  <p>The IGCSE syllabus contains precalculus content.</p>
  <LinkTree url={data.url} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>