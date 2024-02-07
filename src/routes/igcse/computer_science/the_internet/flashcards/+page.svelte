<script>
  import Flashcard from '$lib/components/Flashcard.svelte'

  export let data
  const { flashcards } = data

  let flipped = false
</script>

<svelte:head>
  <title>IGCSE Flashcards</title>
</svelte:head>

<section>
  <h1>Flashcards</h1>
  <Flashcard {flashcards} {flipped}></Flashcard>
</section>