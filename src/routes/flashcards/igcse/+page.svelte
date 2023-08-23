<script>
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data
</script>

<svelte:head>
  <title>IGCSE Flashcards</title>
</svelte:head>

<section>
  <h1>IGCSE</h1>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>