<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Tab, { Label } from '@smui/tab'
  import TabBar from '@smui/tab-bar'

  type Part = {
    question: string,
    marks: number,
    solution: string,
    explanation: string,
  }

  type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Tough'

  type MultipleChoice = {
    intro: string,
    statements: string[],
    images: string[],
    question: string,
    difficulty: Difficulty,
    marks: number,
    choices: [string, string, string, string],
    correctChoice: number,
    explanation: string,
  }

  type Theory = {
    intro: string,
    statements: string[],
    images: string[],
    difficulty: Difficulty,
    marks: number,
    parts: Part[],
  }

  type Question = MultipleChoice | Theory

  let active: number = 1
  export let questions: Question[]
</script>

<div class="quiz">
  <Paper>
    <TabBar tabs={questions.map((value, index) => index + 1)} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </Paper>
</div>