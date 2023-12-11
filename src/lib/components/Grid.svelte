<script lang="ts">
  export let first: string
  export let second: string
  export let result: string
  export let working: string

  first = first.split('').reverse().join('')
  second = second.split('').reverse().join('')
  result = result.split('').reverse().join('')

  second += '+'
</script>

<div class="grid">
  <div class="row">
    {#each working as char}
      <div class="cell blue">{char}</div>
    {/each}
  </div>
  <div class="row">
    {#each first as char}
      <div class="cell">{char}</div>
    {/each}
  </div>
  <div class="row">
    {#each second as char}
      <div class="cell">{char}</div>
    {/each}
  </div>
  <hr>
  <div class="row">
    {#each result as char}
      <div class="cell">{char}</div>
    {/each}
  </div>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row-reverse;
  }

  .cell {
    width: 24px;
    height: 24px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blue {
    color: var(--mdc-theme-primary);
  }
</style>