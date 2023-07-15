<script context="module" lang="ts">
  export type ShortAnswer = {
    answer: string,
  }

  export type Paragraph = {
    marks: number,
    points: string[], // correct ideas
  }

  export type List = {
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
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Textfield from '@smui/textfield'
  import CharacterCounter from '@smui/textfield/character-counter'

  let value: string = ''
  export let questions: Question[]
</script>

{#each questions as question,i}
  <Paper>
    <Title>{i + 1}</Title>
    <Content>
      <p>{question.intro}</p>
      {#each question.parts as part,i}
        {#if 'points' in part}
          <Textfield
            style="width: 100%;"
            input$maxlength={100}
            textarea
            bind:value
            label="Paragraph"
          >
            <CharacterCounter slot="internalCounter"></CharacterCounter>
          </Textfield>
        {:else if 'items' in part}
          List
        {:else if 'labels' in part}
          Naming
        {:else}
          <Textfield label="Answer"></Textfield>
        {/if}
      {/each}
    </Content>
  </Paper>
{/each}