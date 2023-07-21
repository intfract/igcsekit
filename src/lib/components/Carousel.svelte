<script lang="ts">
  import { onMount } from 'svelte'

  type TrackItem = {
    image: string,
    caption: string,
  }

  let view: { width: number, height: number, } = { width: 0, height: 0, }
  let max: number = 0
  let track: HTMLElement
  let children: HTMLElement[] = []
  let start: number = 0
  let prev: number = 0
  let x: number = 0
  export let items: TrackItem[]

  onMount(() => {
    view.width = window.innerWidth
    view.height = window.innerHeight
    max = view.width / 2
    window.addEventListener('mouseup', handleOnUp)
    window.addEventListener('touchend', e => handleOnUp(e.touches[0]))
    window.addEventListener('mousemove', handleOnMove)
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]))
  })

  function handleOnDown(e: MouseEvent | Touch) {
    start = e.clientX
  }

  function handleOnUp(e: MouseEvent | Touch) {
    start = -1
    prev = x
  }

  function handleOnMove(e: MouseEvent | Touch) {
    if (start === -1) return
    const delta = e.clientX - start
    x = Math.max(Math.min(prev + (delta / max) * 100, 0), -100)
    track.animate(
      {
        transform: `translateX(${x}%)`,
      },
      {
        duration: 1200,
        fill: 'forwards',
      },
    )
    for (const child of children) {
      child.animate(
        {
          objectPosition: `${100 + x}% center`,
        },
        {
          duration: 1200,
          fill: 'forwards'
        },
      )
    }
  }
</script>

<div class="carousel">
  <div class="track" bind:this={track} on:mousedown={handleOnDown} on:touchstart={e => handleOnDown(e.touches[0])}>
    {#each items as item,i}
      <div class="track-item">
        <img src={item.image} alt="Background" draggable="false" bind:this={children[i]}>
        <div class="wrapper">
          <div class="caption">{item.caption}</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .carousel {
    --height: 40px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  .track {
    position: relative;
    display: flex;
    gap: 16px;
    width: fit-content;
    height: 100%;
    border-radius: 16px;
    user-select: none;
    overflow: hidden;
  }

  .track-item {
    position: relative;
    min-width: 256px;
    width: 40vw;
    border-radius: 16px;
    overflow: hidden;
    transition: width 0.3s ease-out;
  }

  .track .track-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% center;
    transition: filter 0.3s;
  }

  .wrapper {
    position: absolute;
    height: var(--height);
    bottom: 16px;
    left: 16px;
    overflow: hidden;
  }

  .track .track-item .caption {
    color: white;
    font-size: 32px;
    margin-top: var(--height);
    transition: margin-top 0.3s;
  }

  .track-item:hover .caption {
    margin-top: 0;
  }
</style>