<script context="module" lang="ts">
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
  import { fly } from 'svelte/transition'

  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'
  import Radio from '@smui/radio'
  import FormField from '@smui/form-field'
  import Button, { Label as ButtonLabel } from '@smui/button'
  import Dialog, { Content as DialogContent, Actions, InitialFocus, Title as DialogTitle } from '@smui/dialog'

  const imagePath = '/assets/'

  let active: number = 1
  let selected: number | null
  let open = false
  export let name: string
  export let questions: MultipleChoice[]

  $: active, selected = null // set selected radio to null when active tab changes
</script>

<Dialog bind:open>
  <DialogTitle>Answer</DialogTitle>
  <DialogContent>
    {questions[active - 1].explanation}
  </DialogContent>
</Dialog>

<div class="quiz">
  <TabBar tabs={questions.map((value, index) => index + 1)} let:tab bind:active>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
  <div class="column">
    {#key active}
      <div in:fly={{ y: 64, duration: 250, delay: 250 }} out:fly={{ y: 64, duration: 250 }} class="zero">
        <Paper>
          <Title>{name}</Title>
          {#if 'intro' in questions[active - 1]}
            <p class="intro">{questions[active - 1].intro}</p>
          {/if}
          {#if 'images' in questions[active - 1]}
            {#each questions[active - 1].images as image}
              <img src={imagePath + image} alt="Question Image">
            {/each}
          {/if}
          <p class="question">{questions[active - 1].question}</p>
          <div class="column">
            {#each questions[active - 1].choices as choice,i}
              <FormField>
                <Radio bind:group={selected} value={i}/>
                <span slot="label">
                  {choice}
                </span>
              </FormField>
            {/each}
          </div>
          <Button style="display: block; margin-top: 16px;" variant="raised" on:click={() => open = true}>
            <ButtonLabel>Submit</ButtonLabel>
          </Button>
        </Paper>
      </div>
    {/key}
  </div>
</div>