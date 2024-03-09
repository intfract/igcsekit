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
  <p>IGCSE past papers are available at the <a href="https://rigcse.vercel.app">unofficial r/IGCSE website</a>.</p>
  <h2>Mathematics</h2>
  <p>Currently, only notes for IGCSE 0580 Mathematics are available on this website.</p>
  <h2>Sciences</h2>
  <p>This website has clear and concise notes for all 3 sciences. However, these notes are likely to be incomplete as the amount of theory involved in science subjects is vast. They follow closely with the IGCSE 0654 Sciences syllabus but also apply to separate sciences.</p>
  <p>Some chapters will include notes on the <strong>alternative to practical</strong> paper and each science will show a breakdown of which chapters are excluded from IGCSE 0654 and IGCSE 0653.</p>
  <h2>Computer Science</h2>
  <p>This website has the <strong>best computer science resources</strong> so far. It is the only website that combines notes for each chapter with a pseudocode compiler.</p>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>