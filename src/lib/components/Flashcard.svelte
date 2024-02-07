<script context="module" lang="ts">
  export type Flashcard = {
    front: string,
    back: string,
  }

</script>

<script lang="ts">
  import IconButton from '@smui/icon-button'

  export let flashcards: Flashcard[]
  export let flipped: boolean

  let index = 0
  let transition = false

  function flipCard(e: any) {
    flipped = !flipped
  }

  function skip(n: number) {
    transition = true
    setTimeout(() => {
      index += n
      index = Math.max(0, Math.min(flashcards.length - 1, index))
    }, 250)
    setTimeout(() => {
      transition = false
    }, 250)
  }
</script>

<div class="flashcard" class:flipped class:transition on:click={e => flipCard(e)} on:keypress={e => flipCard(e)}>
  <div class="front">
    {@html flashcards[index].front}
  </div>
  <div class="back">
    {@html flashcards[index].back}
  </div>
</div>
<div class="buttons">
  <IconButton class="material-symbols-rounded" title="next" on:click={e => skip(-1)}>arrow_left_alt</IconButton>
  <IconButton class="material-symbols-rounded" title="next" on:click={e => skip(1)}>arrow_right_alt</IconButton>
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

  .flashcard.transition {
    transform: rotateY(90deg);
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
</style>