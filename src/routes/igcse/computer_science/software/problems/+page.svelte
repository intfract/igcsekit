<script lang="ts">
  import Problems, { type Question } from '$lib/components/Problems.svelte'

  let questions: Question[] = [
    {
      intro: 'A computer programmer uses assembly language to create a computer program for an embedded system in a washing machine.',
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
          },
        },
        {
          instruction: 'Give the name of the translator that will be used for the program.',
          task: {
            answer: 'Assembler'
          },
        },
        {
          instruction: `The washing machine needs to display error codes on a small screen if there is a problem
with the washing machine.
The error codes are stored as binary. The binary numbers are too long to be displayed on the
washing machine.
State how the error codes could be reduced in length to be displayed on the screen.`,
          task: {
            marks: 1,
            points: [
              'Convert to hexadecimal',
              'Convert to denary',
              'A character set can be used'
            ]
          },
        },
      ],
    },
  ]
</script>

<section>
  <h1>Problems</h1>
  <Problems {questions}></Problems>
</section>