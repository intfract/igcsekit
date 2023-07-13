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
      explanation: 'The correct answer is: The cytoplasm contains haemoglobin. \nBlood cells carry oxygen to different parts of the body. Oxygen is required for aerobic respiration in organs. Red blood cells can transport oxygen around the body because oxygen binds to haemoglobin. These cells do not have nuclei to allow room for haemoglobin. \nRed blood cells have a biconcave shape to maximise the efficiency oxygen absorption. A biconcave shape increases the surface area in relation to volume.',
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
      correctChoice: 3,
      explanation: 'The correct answer is: mitochondria and ribosomes. \nEnzymes are proteins and ribosomes are responsible for making proteins. This means that the salivary glands need a large number of ribosomes to produce salivary amylase. Mitochondria release energy through aerobic respiration. A lot of energy is required to manufacture proteins. \nMost cells only have one nucleus. Vacuoles are rarely seen in animal cells and plant cells typically only have a single vacuole.',
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz bind:questions name="Cells"></Quiz>
</section>