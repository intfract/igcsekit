<script lang="ts">
  type CarouselItem = {
    title: string,
    icon: string,
  }
  export let items: CarouselItem[]

  function calculate(index: number, count: number): number {
    return maxWidth
  }

  function style(index: number): string {
    const count = Math.ceil(totalWidth / (maxWidth + margin))
    return `width: ${calculate(index, count)}px;`
  }

  function setScroll(index: number) {
    scrollIndex = index
    for (let i = 0; i < widths.length; i++) {
      widths[i] = style(i)
    }
  }

  function mouseDown(e: MouseEvent) {
    startX = e.offsetX
    mousePressed = true
  }

  function mouseUp(e: MouseEvent) {
    mousePressed = false
  }

  function mouseMove(e: MouseEvent) {
    if (mousePressed) {
      mouseX = e.offsetX
      let after = pos + mouseX - startX
      if (after > 0) {
        pos = 0
      } else if (after < limit) {
        pos = limit
      } else {
        pos = after
      }
    }
  }

  function init() {
    let list: string[] = []
    for (let i = 0; i < items.length; i++) {
      list.push(style(i))
    }
    return list
  }

  let totalWidth: number = 800 // default section width
  let maxWidth: number = 256
  let minWidth: number = 32
  let margin: number = minWidth / 2
  let limit: number = -(items.length - 1) * (maxWidth + margin) + totalWidth / 2 + maxWidth / 2 + margin
  let commonStyles: string = `width: ${maxWidth}px; border-radius: ${margin}px; margin-right: ${margin}px;`
  let pos = 0
  $: scrollIndex = 0
  $: widths = init()
  $: offset = `transform: translateX(${pos}px)`
  $: mousePressed = false
  $: startX = 0
  $: mouseX = 0
  $: redundant = -scrollIndex * (maxWidth + margin) + totalWidth / 2 - maxWidth / 2
</script>

<div class="carousel" style={`border-radius: ${margin}px;`} on:mousedown={mouseDown} on:mouseup={mouseUp} on:mousemove={mouseMove} on:mouseleave={mouseUp}>
  <div class="carousel-items" style={offset}>
    {#each items as item, i}
      <div class="carousel-item" style={commonStyles}>
        <div class="background">
          <span class="material-symbols-rounded">{item.icon}</span>
        </div>
        <span class="label">{item.title}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .carousel {
    overflow: hidden;
  }

  .carousel-items {
    display: flex;
    flex-direction: row;
    width: fit-content;
    /* transition: transform 0.2s; */
  }

  .carousel-item {
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 16px;
    max-width: 256px; */
    height: 256px;
    background-color: var(--mdc-theme-muted);
    /* border-radius: 16px; */
    font-size: 0;
    overflow: hidden;
    transition: width 0.2s;
    user-select: none;
  }

  .carousel-item:last-child {
    margin-right: 0 !important;
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