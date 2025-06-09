<script lang="ts">
  import { onMount } from 'svelte'
  import { seek } from '$lib/utils/files'
  import { page } from '$app/stores'

  type Link = {
    text: string
    scroll: number
    level: number
  }

  let headings: HTMLElement[]
  let outline: Link[] = []

  onMount(() => {
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

  export let glob: Record<string, string>

  const sublinks = seek(glob, $page.url.pathname)
</script>

<div class="container">
  <div class="toc">
    <span class="title">Contents</span>
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
    <ul>
      {#if sublinks['questions']}
        <li><a href={$page.url.pathname + '/questions'}>Questions</a></li>
      {/if}
      {#if sublinks['problems']}
        <li><a href={$page.url.pathname + '/problems'}>Problems</a></li>
      {/if}
      {#if sublinks['flashcards']}
        <li><a href={$page.url.pathname + '/flashcards'}>Flashcards</a></li>
      {/if}
    </ul>
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
    height: 400px;
    max-height: 100%;
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

  .title {
    padding: 8px;
    font-size: 32px;
  }
</style>
