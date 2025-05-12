<script lang="ts">
  import Problems, { type Question } from '$lib/components/Problems.svelte'

  let progress: number = 0
  let questions: Question[] = [
    {
      intro: 'The image is a photomicrograph of a type of specialised animal cell.',
      images: ['red_blood_cells.png'],
      table: [],
      parts: [
        {
          instruction: 'Name the cells shown in the image.',
          task: {
            answer: 'red blood cells',
          },
        },
        {
          instruction: 'Describe two ways the cells shown in the image are adapted for their function.',
          task: {
            marks: 2,
            items: [
              'biconcave shape OR large surface area',
              'contain haemoglobin',
              'no nucleus',
            ],
          },
        },
      ],
    },
  ]
</script>

<section class="problems">
  <h1>Cells</h1>
  <Problems {questions}></Problems>
</section>