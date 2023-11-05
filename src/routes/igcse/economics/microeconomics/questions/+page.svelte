<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      statements: [],
      images: [],
      table: [],
      question: 'What will happen to a firm that expands to take advantage of economies of scale?',
      difficulty: 'Easy',
      choices: [
        'Average costs of production will decrease.',
        'Average costs of production will increase.',
        'Profits will decrease.',
        'The price of the firm\'s products will increase.',
      ],
      correctChoice: 0,
      explanation: p('Large firms benefit from economies of scale because their average total costs of production decreases with higher levels of output.'),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Microeconomics"></Quiz>
</section>