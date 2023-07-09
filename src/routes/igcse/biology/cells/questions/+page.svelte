<script lang="ts">
  import Quiz, { type Question } from '$lib/components/Quiz.svelte'
  let questions: Question[] = [
    {
      intro: 'The diagram shows a red blood cell.',
      statements: [''],
      images: ['rbc.png'],
      table: [],
      question: '',
      difficulty: 'Tough',
      marks: 1,
      choices: [
        'The cell has no nucleus to use up oxygen.',
        'The cell membrane has a small surface area in relation to volume.',
        'The cytoplasm contains haemoglobin.',
        'The flat structure makes it easier to be carried through arteries.',
      ],
      correctChoice: 2,
      explanation: '',
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz bind:questions name="Cells"></Quiz>
</section>