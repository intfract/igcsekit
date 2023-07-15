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

  $: current = questions[active - 1]
  $: active, selected = null // set selected radio to null when active tab changes
</script>

<Dialog bind:open>
  <DialogTitle>{selected === current.correctChoice ? 'Right Answer' : 'Wrong Answer'}</DialogTitle>
  <DialogContent>
    {@html current.explanation}
  </DialogContent>
  <Actions>
    <Button on:click={() => (false)}>
      <Label>Report Mistake</Label>
    </Button>
    <Button
      defaultAction
      variant="raised"
      use={[InitialFocus]}
    >
      <Label>Close</Label>
    </Button>
  </Actions>
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
          <Content>
            {#if 'intro' in current}
              <p class="intro">{current.intro}</p>
            {/if}
            {#if 'images' in current}
              {#each current.images as image}
                <img src={imagePath + image} alt="Question Image">
              {/each}
            {/if}
            <p class="question">{current.question}</p>
            <div class="column">
              {#each current.choices as choice,i}
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
          </Content>
        </Paper>
      </div>
    {/key}
  </div>
</div>