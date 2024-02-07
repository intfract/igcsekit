<script lang="ts">
  import Flashcard from '$lib/components/Flashcard.svelte'
  import { h } from '$lib/utils/html'

  let flipped = false

  let flashcards = [
    {
      front: h(3, 'Click to flip!'),
      back: 'This is the answer!',
    },
  ]
</script>

<svelte:head>
  <title>Flashcards</title>
  <meta name="description" content="IGCSE Kit Flashcards" />
</svelte:head>

<section>
  <h1>Flashcards</h1>
  <p>Share your flashcards with the public or explore existing flashcards by adding <code>/flashcards</code> to the URL of any notes page!</p>
  <Flashcard title="Example" {flashcards} {flipped}></Flashcard>
</section>

<style>
  
</style>