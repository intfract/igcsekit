<script lang="ts">
  import Problems, { type Question } from '$lib/components/Problems.svelte'

  let questions: Question[] = [
    {
      intro:
        'A computer programmer uses assembly language to create a computer program for an embedded system in a washing machine.',
      images: [],
      table: [],
      parts: [
        {
          instruction: 'State what is meant by an embedded system.',
          task: {
            marks: 1,
            points: [
              'Computer system that is designed to a perform dedicated/single function',
              'Computer system that contains a microprocessor (and)/dedicated hardware',
              'Computer system that is built into a larger system'
            ]
          }
        },
        {
          instruction: 'Give the name of the translator that will be used for the program.',
          task: {
            answer: 'Assembler'
          }
        },
        {
          instruction: `Give one benefit to the programmer of using assembly language to write the program.`,
          task: {
            marks: 1,
            points: [
              'More control over manipulating the hardware',
              'Faster execution for testing than a high-level language',
              'They can use machine specific instructions'
            ]
          }
        },
        {
          instruction: `The programmer uses an integrated development environment (IDE) to write the program.
 A built-in translator to convert the program into machine code is one way that the IDE helps
the computer programmer.
 Describe three other ways the IDE can help the programmer.`,
          task: {
            marks: 6,
            points: [
              'Code editor …',
              '… that allows the user to enter and amend code in their program',
              'Run-time environment',
              '… that allows a program to be run and see the outputs of their program',
              'Error-diagnostic',
              '… to show the programmer where there are errors in the program',
              'Auto-completion',
              '… to give the user options/suggestions of key commands to select',
              'Auto-correction',
              '… to correct a command that has a minor misspelling',
              'Prettyprint',
              '… changes the colour of key commands do they are easy to identify'
            ]
          }
        }
      ]
    }
  ]
</script>

<section>
  <h1>Problems</h1>
  <Problems {questions}></Problems>
</section>
