<script context="module" lang="ts">
  type Part = {
    question: string,
    marks: number,
    solution: string,
    explanation: string,
  }

  type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Tough'

  type MultipleChoice = {
    intro?: string,
    statements: string[],
    images: string[],
    table: string[][],
    question: string,
    difficulty: Difficulty,
    marks: number,
    choices: [string, string, string, string],
    correctChoice: number,
    explanation: string,
  }

  type Theory = {
    intro?: string,
    statements: string[],
    images: string[],
    table: string[][],
    difficulty: Difficulty,
    marks: number,
    parts: Part[],
  }

  export type Question = MultipleChoice | Theory
</script>

<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'

  const imagePath = '/assets/'

  let active: number = 1
  export let name: string
  export let questions: Question[]
</script>

<div class="quiz">
  <Paper>
    <TabBar tabs={questions.map((value, index) => index + 1)} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    <h3>{name}</h3>
    {#if 'intro' in questions[active - 1]}
      <p class="intro">{questions[active - 1].intro}</p>
    {/if}
    {#if 'images' in questions[active - 1]}
      {#each questions[active - 1].images as image}
        <img src={imagePath + image} alt="Question Image">
      {/each}
    {/if}
  </Paper>
</div>