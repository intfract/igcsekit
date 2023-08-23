<script lang="ts">
  import Flashcard from '$lib/components/Flashcard.svelte'
  import { h } from '$lib/utils/html'

  let flipped = false
  let front = h(3, 'Click to flip!')
  let back = 'This is the answer!'
</script>

<svelte:head>
  <title>Flashcards</title>
  <meta name="description" content="IGCSE Kit Flashcards" />
</svelte:head>

<section>
  <h1>Flashcards</h1>
  <p>Share your flashcards with the public or explore existing flashcards!</p>
  <Flashcard {front} {back} {flipped}></Flashcard>
</section>

<style>
  
</style>