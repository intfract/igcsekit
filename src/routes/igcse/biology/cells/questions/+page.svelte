<script lang="ts">
  import Quiz from '$lib/components/Quiz.svelte'
  let questions: any[] = [
    {
      intro: '',
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz bind:questions></Quiz>
</section>