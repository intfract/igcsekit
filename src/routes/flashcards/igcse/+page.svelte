<script>
  import Flashcard from '$lib/components/Flashcard.svelte'

  export let data
  const { flashcards } = data

  let flipped = false
  let index = 0
</script>

<svelte:head>
  <title>IGCSE Flashcards</title>
</svelte:head>

<section>
  <h1>IGCSE</h1>
  <Flashcard front={flashcards[index].front} back={flashcards[index].back} {flipped}></Flashcard>
</section>