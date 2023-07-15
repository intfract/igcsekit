<script lang="ts">
  import Problem, { type Question } from '$lib/components/Problem.svelte'

  import LinearProgress from '@smui/linear-progress'

  let progress: number = 0
  let questions: Question[] = []
</script>

<div class="progress">
  <LinearProgress {progress}></LinearProgress>
</div>
<section>
  <Problem {questions}></Problem>
</section>