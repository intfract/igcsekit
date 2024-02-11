<script lang="ts">
  import { tag, join, p, b, sub } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: 'A section of a polymer made from two different monomers is shown.',
      statements: [],
      images: ['0654_s22_qp_21_27.png'],
      table: [],
      question: 'Which monomers are used to make this polymer?',
      difficulty: 'Tough',
      choices: [
        `HO${sub('2')}CCH${sub('2')}CO${sub('2')}H and H${sub('2')}NCH${sub('2')}NH${sub('2')}`,
        `HO${sub('2')}CCH${sub('2')}CO${sub('2')}H and H${sub('2')}NCH${sub('2')}CH${sub('2')}NH${sub('2')}`,
        `HO${sub('2')}CCH${sub('2')}CH${sub('2')}CO${sub('2')}H and H${sub('2')}NCH${sub('2')}NH${sub('2')}`,
        `HO${sub('2')}CCH${sub('2')}NH${sub('2')} and HO${sub('2')}CCH${sub('2')}CH${sub('2')}NH${sub('2')}`,
      ],
      correctChoice: 3,
      explanation: join(
        p(`The correct answer is: HO${sub('2')}CCH${sub('2')}NH${sub('2')} and HO${sub('2')}CCH${sub('2')}CH${sub('2')}NH${sub('2')}.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="Organic Chemistry"></Quiz>
</section>