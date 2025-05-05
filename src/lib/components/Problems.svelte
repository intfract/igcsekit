<script context="module" lang="ts">
  export type ShortAnswer = {
    answer: string,
  }

  export type Paragraph = {
    marks: number,
    points: string[], // correct ideas
  }

  export type List = {
    marks: number,
    items: string[], // correct items
  }

  export type Naming = {
    letters: string[],
    labels: string[], // correct labels
  }

  export type Part = {
    instruction: string,
    task: ShortAnswer | Paragraph | List | Naming,
  }

  export type Question = {
    intro: string,
    images: string[],
    table: string[][],
    parts: Part[],
  }
</script>

<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'
  import Button, { Label as ButtonLabel } from '@smui/button'
  import Dialog, { Content as DialogContent, Actions, InitialFocus, Title as DialogTitle } from '@smui/dialog'
  import Textfield from '@smui/textfield'
  import CharacterCounter from '@smui/textfield/character-counter'
  import { fly } from 'svelte/transition'

  const imagePath = '/assets/'

  function setBinds() {
    const n = active - 1
    for (let i = 0; i < questions[n].parts.length; i++) {
      const part = questions[n].parts[i]
      if ('answer' in part.task || 'points' in part.task) {
        binds[i] = ''
      } else if ('items' in part.task && 'marks' in part.task) {
        const temp: string[] = []
        for (let j = 0; j < part.task.marks; j++) {
          temp.push('')
        }
        binds[i] = temp
      }
    }
  }

  function getAnswer() {
    let s: string = ''
    const n: number = active - 1
    console.log(n)
    for (let i = 0; i < questions[n].parts.length; i++) {
      const part = questions[n].parts[i]
      s += p(b(part.instruction))
      if ('answer' in part.task) {
        s += p(part.task.answer)
      } else if ('items' in part.task && 'marks' in part.task) {
        s += p(`Any ${part.task.marks} from:`)
        let temp: string = ''
        for (let j = 0; j < part.task.items.length; j++) {
          temp += tag('li', part.task.items[j])
        }
        s += tag('ul', temp)
      } else if ('points' in part.task) {
        s += p(`Any ${part.task.marks} from:`)
        let temp: string = ''
        for (let j = 0; j < part.task.points.length; j++) {
          temp += tag('li', part.task.points[j])
        }
        s += tag('ul', temp)
      }
    }
    answer = s
  }

  let value: string = '' // TODO: create separate bindings for each paragraph
  let binds: (string | string[])[] = []
  let active: number = 1
  let open = false
  let answer: string
  export let questions: Question[]

  setBinds()

  $: current = questions[active - 1]
  $: active, setBinds(), getAnswer()
</script>

<Dialog bind:open>
  <DialogTitle>Answer</DialogTitle>
  <DialogContent>
    {@html answer}
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
          <Title>{active}</Title>
          <Content>
            <p>{current.intro}</p>
            {#if 'images' in current}
              {#each current.images as image}
                <img src={imagePath + image} alt="Diagram">
              {/each}
            {/if}
            {#each current.parts as part,i}
              <p>{part.instruction}</p>
              {#if 'points' in part.task}
                <Textfield
                  style="width: 100%;"
                  input$maxlength={100}
                  textarea
                  bind:value={binds[i]}
                  label="Paragraph"
                >
                  <CharacterCounter slot="internalCounter"></CharacterCounter>
                </Textfield>
              {:else if 'items' in part.task && 'marks' in part.task}
                <ol>
                  {#each new Array(part.task.marks) as x,j}
                    <li>
                      <Textfield label={`Item ${j + 1}`} bind:value={binds[i][j]}></Textfield>
                    </li>
                  {/each}
                </ol>
              {:else if 'labels' in part.task}
                <!-- TODO: add Naming component -->
              {:else}
                <Textfield label="Answer" bind:value={binds[i]}></Textfield>
              {/if}
            {/each}
            <Button style="display: block; margin-top: 16px;" variant="raised" on:click={() => open = true}>
              <ButtonLabel>Submit</ButtonLabel>
            </Button>
          </Content>
        </Paper>
      </div>
    {/key}
  </div>
</div>