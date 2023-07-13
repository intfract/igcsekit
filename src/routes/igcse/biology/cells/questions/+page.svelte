<script lang="ts">
  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: 'The diagram shows a red blood cell.',
      statements: [],
      images: ['rbc.png'],
      table: [],
      question: 'How is the structure of the cell related to its function?',
      difficulty: 'Tough',
      choices: [
        'The cell has no nucleus to use up oxygen.',
        'The cell membrane has a small surface area in relation to volume.',
        'The cytoplasm contains haemoglobin.',
        'The flat structure makes it easier to be carried through arteries.',
      ],
      correctChoice: 2,
      explanation: '',
    },
    {
      intro: 'The salivary glands contain cells which are responsible for producing salivary amylase, a digestive enzyme.',
      statements: [],
      images: [],
      table: [],
      question: 'Which organelles would be present in large numbers in cells of the salivary glands?',
      difficulty: 'Tough',
      choices: [
        'mitochondria and nuclei',
        'nuclei and ribosomes',
        'mitochondria and vacuoles',
        'mitochondria and ribosomes',
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