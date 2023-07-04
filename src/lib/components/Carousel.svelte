<script lang="ts">
  type CarouselItem = {
    title: string,
    icon: string,
  }
  export let items: CarouselItem[]

  // replace with an analog boolean function like pow(e, - x ** 2)
  function calculate(index: number, count: number): number {
    if (index == scrollIndex) return maxWidth
    if (scrollIndex == 0 || scrollIndex == items.length - 1) {
      if (Math.abs(index - scrollIndex) <= 2) return maxWidth / 2
    }
    if (Math.abs(index - scrollIndex) <= 1) return maxWidth / 2
    return minWidth
  }

  function style(index: number): string {
    const count = Math.floor(totalWidth / maxWidth)
    return `width: ${calculate(index, count)}px;`
  }

  function setScroll(index: number) {
    scrollIndex = index
    for (let i = 0; i < widths.length; i++) {
      const width = widths[i]
      widths[i] = style(i)
    }
  }

  function init() {
    let list: string[] = []
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      list.push(style(i))
    }
    return list
  }

  let totalWidth: number = 800
  let maxWidth: number = 256
  let minWidth: number = 32
  $: scrollIndex = 0
  $: widths = init()
</script>

<div class="carousel">
  <div class="carousel-items">
    {#each items as item, i}
      <div class="carousel-item" style={widths[i]} on:click={() => setScroll(i)}>
        <div class="background">
          <span class="material-symbols-rounded">{item.icon}</span>
        </div>
        <span class="label">{item.title}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .carousel-items {
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    max-width: 256px;
    height: 256px;
    background-color: var(--mdc-theme-muted);
    border-radius: 16px;
    font-size: 0;
    overflow: hidden;
    transition: width 0.2s;
  }

  .carousel-item:last-child {
    margin-right: 0;
  }

  .carousel-item .material-symbols-rounded {
    font-size: 48px;
  }

  .carousel-item .label {
    position: absolute;
    bottom: 8px;
    font-size: 16px;
    text-align: center;
  }
</style>