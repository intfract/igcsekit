<script lang="ts">
  export let src: string
</script>

<div class="image">
  <img {src} alt="diagram">
</div>

<style>
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 16px;
  }

  img {
    width: 100%;
  }
</style>