<script lang="ts">
  export let front: string
  export let back: string
  export let flipped: boolean
</script>

<div class="flashcard" class:flipped on:click={e => flipped = !flipped}>
  <div class="front">
    {@html front}
  </div>
  <div class="back">
    {@html back}
  </div>
</div>

<style>
  .flashcard {
    position: relative;
    margin: auto;
    width: 400px;
    height: 240px;
    border-radius: 16px;
    transform: rotateX(0deg);
    transition: all 0.3s;
    overflow: hidden;
    user-select: none;
  }

  .flashcard.flipped {
    transform: rotateX(180deg);
  }

  .flashcard div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #ddd;
  }

  .flashcard .front {
    opacity: 1;
    transform: rotateX(0deg);
  }

  .flashcard.flipped .front {
    opacity: 0;
  }

  .flashcard .back {
    opacity: 0;
    transform: rotateX(180deg);
  }

  .flashcard.flipped .back {
    opacity: 1;
  }
</style>