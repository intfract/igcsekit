<script lang="ts">
  import { tag, join, p, b, br } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: join(
        p(`The operating system provides several functions.`),
      ),
      statements: [],
      images: [],
      table: [],
      question: 'Which of these is not a function of the operating system?',
      difficulty: 'Easy',
      choices: [
        'managing files',
        'providing an interface',
        'handling interrupts',
        'loading the bootstrap',
      ],
      correctChoice: 3,
      explanation: join(
        p(`Loading the bootstrap is ${b('not')} a function of the operating system.`),
        p(`The bootloader resides in the ROM and is a small program that loads the operating system.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Hardware"></Quiz>
</section>