<script lang='ts'>
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data
</script>

<section>
  <h1>Physics</h1>
  <LinkTree url={data.url} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>