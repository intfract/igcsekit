<script lang="ts">
  import { tag, join, p, b, br } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: join(
        p(`A student uses a computer and several hardware devices to complete his schoolwork.`),
        p(`The computer has a central processing unit (CPU).`),
        p('The student uses a keyboard to complete his schoolwork.'),
      ),
      statements: [],
      images: [],
      table: [],
      question: 'Which type of device is the keyboard?',
      difficulty: 'Easy',
      choices: [
        'input',
        'memory',
        'output',
        'storage',
      ],
      correctChoice: 0,
      explanation: join(
        p(`The keyboard is an ${b('input')} device.`),
        p(`It transmits the user's keystrokes as digital data to the computer`),
      ),
    },
    {
      intro: join(
        p(`A student uses a computer and several hardware devices to complete his schoolwork.`),
        p(`The computer has a central processing unit (CPU).`),
        p('The student uses a printer to print his schoolwork.'),
      ),
      statements: [],
      images: [],
      table: [],
      question: 'Which type of device is the printer?',
      difficulty: 'Easy',
      choices: [
        'input',
        'memory',
        'output',
        'storage',
      ],
      correctChoice: 2,
      explanation: join(
        p(`The printer is an ${b('output')} device.`),
        p(`It receives digital data from the computer and outputs printed paper for the user.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Hardware"></Quiz>
</section>