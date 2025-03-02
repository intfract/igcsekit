<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: p('The diagram shows a red blood cell.'),
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
      explanation: join(
        p(`The correct answer is: The cytoplasm contains haemoglobin.`),
        p(`Blood cells carry oxygen to different parts of the body. Oxygen is required for aerobic respiration in organs. Red blood cells can transport oxygen around the body because ${b(`oxygen binds to haemoglobin`)}. These cells do not have nuclei to allow room for haemoglobin.`),
        p(`Red blood cells have a biconcave shape to maximise the efficiency oxygen absorption. A biconcave shape increases the surface area in relation to volume. It does not have anything to do with arteries.`),
      ),
    },
    {
      intro: p('The salivary glands contain cells which are responsible for producing salivary amylase, a digestive enzyme.'),
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
      explanation: join(
        p(`The correct answer is: mitochondria and ribosomes.`),
        p(`${b(`Enzymes are proteins`)} and ribosomes are responsible for making proteins. This means that the salivary glands need a large number of ribosomes to produce salivary amylase. Mitochondria release energy through aerobic respiration. A lot of energy is required to manufacture proteins.`),
        p(`Most cells only have one nucleus. Vacuoles are rarely seen in animal cells and plant cells typically only have a single vacuole.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Cells"></Quiz>
</section>