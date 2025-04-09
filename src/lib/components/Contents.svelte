<script lang="ts">
  import { onMount } from 'svelte'
  import { afterNavigate } from '$app/navigation'

  type Link = {
    text: string
    scroll: number
    level: number
  }

  let headings: HTMLElement[]
  let outline: Link[] = []
  $: headings, console.log(headings)
  $: outline, console.log(outline)

  afterNavigate(() => {
    headings = Array.from(document.querySelectorAll('section > :is(h2, h3, h4)'))
    const list: Link[] = []
    for (const heading of headings) {
      list.push({
        text: heading.textContent ?? '',
        scroll: heading.offsetTop,
        level: parseInt(heading.tagName.substring(1)) - 2
      })
    }
    outline = list
  })

  function jump(top: number) {
    document.querySelector('main')?.scrollTo({ top, left: 0, behavior: 'smooth' })
    console.log(top)
  }
</script>

<div class="container">
  <div class="toc">
    <div class="wrapper">
      {#each outline as item}
        <div class="line">
          {#each { length: item.level } as level}
            <div class="space"></div>
          {/each}
          <span class="heading" on:click={(e) => jump(item.scroll)}>{item.text}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    position: absolute;
    right: 0;
    width: calc((100% - 864px) / 2);
    height: 100vh;
  }

  .toc {
    width: 100%;
    height: 100%;
    padding: 32px;
    overflow: auto;
  }

  .wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    overflow: auto;
  }

  .heading {
    box-sizing: border-box;
    padding: 8px;
    cursor: pointer;
  }

  .line {
    display: flex;
  }

  .space {
    width: 2em;
  }
</style>
