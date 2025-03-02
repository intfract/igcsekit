<script lang="ts">
  import Problems, { type Question } from '$lib/components/Problems.svelte'

  let questions: Question[] = [
    {
      intro: 'A company has a website that is stored on a web server.',
      images: [],
      table: [],
      parts: [
        {
          instruction: 'The company uses parallel half-duplex data transmission to transmit the data for the new videos to the web server. Explain why parallel half-duplex data transmission is the most appropriate method.',
          task: {
            marks: 4,
            points: [
              'parallel would allow fastest transmission',
              '... of the large amount of data',
              'half-duplex allows data to be uploaded and downloaded',
              '... but this does not have to occur at the same time',
              'data is not required to travel a long distance',
              '... therefore skewing is not a problem',
            ],
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