<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: 'Zinc is mixed with molten element X. A new material, Y, is made. Y conducts electricity.',
      statements: [],
      images: [],
      table: [],
      question: 'Which type of substance is Y?',
      difficulty: 'Medium',
      choices: [
        'alloy',
        'covalent compound',
        'macromolecule',
        'ionic compound',
      ],
      correctChoice: 0,
      explanation: p('Alloys are a mixture of metals which means alloys conduct electricity. X has to be a metal because it is molten.'),
    },
    {
      statements: [],
      images: [],
      table: [],
      question: 'Which metal is mixed with copper to make brass?',
      difficulty: 'Medium',
      choices: [
        'aluminium',
        'iron',
        'magnesium',
        'zinc',
      ],
      correctChoice: 3,
      explanation: p('Brass is an alloy. It is a mixture of zinc and copper.'),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Metals"></Quiz>
</section>