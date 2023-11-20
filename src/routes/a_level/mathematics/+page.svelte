<script lang="ts">
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data
</script>

<section>
  <h1>Mathematics</h1>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>