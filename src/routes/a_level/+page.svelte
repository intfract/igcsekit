<script lang="ts">
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data
</script>

<svelte:head>
  <title>A Level</title>
  <meta property="og:title" content="A Level">
  <meta property="og:description" content="Continue your A Level journey with free notes and practice questions!">
</svelte:head>

<section>
  <h1>A Level</h1>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>