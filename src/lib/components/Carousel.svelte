<script lang="ts">
  type CarouselItem = {
    title: string,
    icon: string,
  }
  export let items: CarouselItem[]
</script>

<div class="carousel">
  <div class="carousel-items">
    {#each items as item}
      <div class="carousel-item">
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
    display: flex;
    flex-direction: row;
  }
</style>