<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: 'Light undergoes total internal reflection in an optical fibre.',
      statements: [],
      images: [],
      table: [],
      question: 'Which statement explains why this reflection occurs? ',
      difficulty: 'Easy',
      choices: [
        'The angle of incidence is equal to the angle of refraction.',
        'The angle of incidence is greater than the angle of reflection.',
        'The angle of incidence is greater than the critical angle.',
        'The angle of incidence is less than the critical angle.',
      ],
      correctChoice: 2,
      explanation: join(
        p(`The correct answer is: Some of the light emerges into the air and some is reflected back into the block.`),
        p(`Since the angle of incidence is less than the ciritical angle, total internal reflection will not occur. However, partial internal reflection may occur. Most of the light is expected to emerge into the air but some of the light will be reflected back into the glass.`),
      ),
    },
    {
      intro: 'Light is travelling in a glass block. The light reaches the edge of the block. The angle of incidence at the edge is much less than the critical angle.',
      statements: [],
      images: [],
      table: [],
      question: 'What happens to the light?',
      difficulty: 'Tough',
      choices: [
        'All of the light emerges into the air.',
        'All of the light is reflected back into the block.',
        'Some of the light emerges into the air and some is reflected back into the block.',
        'Some of the light is reflected back into the block and some travels along the edge of the block.',
      ],
      correctChoice: 2,
      explanation: join(
        p(`The correct answer is: Some of the light emerges into the air and some is reflected back into the block.`),
        p(`Since the angle of incidence is less than the ciritical angle, total internal reflection will not occur. However, partial internal reflection may occur. Most of the light is expected to emerge into the air but some of the light will be reflected back into the glass.`),
      ),
    },
    {
      intro: 'Four loudspeakers vibrate at different frequencies.',
      statements: [],
      images: [],
      table: [],
      question: 'Which frequency produces a sound with the largest wavelength and can be heard by a human?',
      difficulty: 'Hard',
      choices: [
        '15 Hz',
        '150 Hz',
        '2.5 kHz',
        '25 kHz',
      ],
      correctChoice: 1,
      explanation: join(
        p(`The correct answer is: 150 kHz.`),
        p(`The audible frequency range for humans is 20 Hz to 20 kHz. Frequency is invsersely proportional to wavelength. Therefore, the lowest audible frequency will produce the largest audible wavelength.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Waves"></Quiz>
</section>