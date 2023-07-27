<script lang="ts">
  const modules = import.meta.glob('./**/+page.svelte')
  let links: string[] = []

  export let data

  for (const key of Object.keys(modules)) {
    links.push(key.replace('.', data.url).replace('/+page.svelte', ''))
  }
</script>

<section>
  <h1>IGCSE</h1>
  <h2>Link Tree</h2>
  <ul>
    {#each links as link}
      <li>
        <a href={link}>{link}</a>
      </li>
    {/each}
  </ul>
</section>