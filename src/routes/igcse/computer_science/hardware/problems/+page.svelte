<script lang="ts">
  import Problems, { type Question } from '$lib/components/Problems.svelte'

  let questions: Question[] = [
    {
      intro: 'A component in the CPU sends signals to manage the fetch-decode-execute cycle.',
      images: [],
      table: [],
      parts: [
        {
          instruction: 'State the name of this component.',
          task: {
            answer: 'control unit'
          },
        },
      ],
    },
    {
      intro: 'The CPU has a clock speed of 2.4Ghz.',
      images: [],
      table: [],
      parts: [
        {
          instruction: 'Describe what is meant by a 2.4Ghz clock speed.',
          task: {
            marks: 2,
            points: [
              '(The CPU completes) 2.4 billion',
              '... cycles/clock pulses per second',
            ],
          },
        },
      ],
    },
    {
      intro: 'The CPU contains registers including the memory data register (MDR).',
      images: [],
      table: [],
      parts: [
        {
          instruction: 'Describe the role of the MDR in the fetch-decode-execute cycle.',
          task: {
            marks: 2,
            points: [
              'Stores data ...',
              '...  that has been fetched/to be written to memory',
            ],
          },
        },
        {
          instruction: 'Identify three other registers contained in the CPU.',
          task: {
            marks: 3,
            items: [
              'Memory address register // MAR',
              'Program counter // PC',
              'Current instruction register // CIR',
              'Accumulator // ACC',
            ],
          },
        },
      ],
    },
  ]
</script>

<section class="problems">
  <h1>Problems</h1>
  <Problems {questions}></Problems>
</section>