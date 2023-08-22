<script lang="ts">
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data
</script>

<svelte:head>
  <title>IGCSE</title>
  <meta property="og:title" content="IGCSE">
  <meta property="og:description" content="Continue your IGCSE journey with free notes and practice questions!">
</svelte:head>

<section>
  <h1>IGCSE</h1>
  <LinkTree url={data.url} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>