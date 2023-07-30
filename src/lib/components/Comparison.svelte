<script lang="ts">
  export let positives: string[]
  export let negatives: string[]
</script>

<div class="comparison">
  <ul class="plus">
    {#each positives as positive}
      <li>{positive}</li>
    {/each}
  </ul>
  <ul class="minus">
    {#each negatives as negative}
      <li>{negative}</li>
    {/each}
  </ul>
</div>

<style>
  .comparison {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .comparison ul {
    width: 50%;
  }

  .plus {
    color: var(--mdc-theme-primary);
    list-style-type: '+   ';
  }

  .minus {
    color: var(--mdc-theme-error);
    list-style-type: '-   ';
  }
</style>