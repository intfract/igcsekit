<script context="module" lang="ts">
  type Part = {
    question: string,
    marks: number,
    solution: string,
    explanation: string,
  }

  type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Tough'

  export type MultipleChoice = {
    intro?: string,
    statements: string[],
    images: string[],
    table: string[][],
    question: string,
    difficulty: Difficulty,
    choices: [string, string, string, string],
    correctChoice: number,
    explanation: string,
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition'

  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'
  import Radio from '@smui/radio'
  import FormField from '@smui/form-field'
  import Button, { Label as ButtonLabel } from '@smui/button'

  const imagePath = '/assets/'

  let active: number = 1
  let selected: number
  export let name: string
  export let questions: MultipleChoice[]
</script>

<div class="quiz">
  <TabBar tabs={questions.map((value, index) => index + 1)} let:tab bind:active>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
  {#key active}
    <div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
      <Paper>
        <h3>{name}</h3>
        {#if 'intro' in questions[active - 1]}
          <p class="intro">{questions[active - 1].intro}</p>
        {/if}
        {#if 'images' in questions[active - 1]}
          {#each questions[active - 1].images as image}
            <img src={imagePath + image} alt="Question Image">
          {/each}
        {/if}
        <p class="question">{questions[active - 1].question}</p>
        {#each questions[active - 1].choices as choice,i}
          <FormField>
            <Radio bind:group={selected} value={i}/>
            <span slot="label">
              {choice}
            </span>
          </FormField>
        {/each}
        <Button style="display: block; margin-top: 16px;" variant="raised">
          <ButtonLabel>Submit</ButtonLabel>
        </Button>
      </Paper>
    </div>
  {/key}
</div>