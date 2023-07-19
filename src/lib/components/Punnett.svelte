<script lang="ts">
  export let mother: string
  export let father: string

  if (mother.length !== father.length) throw new Error('unbalanced alleles')

  let a: string[] = mother.split('')
  let b: string[] = father.split('')
  let fCol: string[] = []
  b.forEach(x => fCol.push(x))
  let grid: string[][] = [
    ['', ...a],
    ...fCol.map(x => [x])
  ]
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      grid[i + 1][j + 1] = a[i] + b[j]
    }
  }
  console.log(grid)
</script>

<div class="square" style={`grid-template-columns: repeat(${a.length + 1}, 64px); grid-template-rows: repeat(${b.length + 1}, 64px);`}>
  {#each grid as row,i}
    {#each row as cell}
      <div class="alleles">
        {#each cell.split('') as allele,j}
          {#if j || i && cell.length === 1}
            <span class="allele father">{allele}</span>
          {:else}
            <span class="allele mother">{allele}</span>
          {/if}
        {/each}
      </div>
    {/each}
  {/each}
</div>

<style>
  .square {
    display: grid;
  }

  .alleles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .allele {
    font-size: 24px;
  }

  .mother {
    color: var(--mdc-theme-error);
  }

  .father {
    color: var(--mdc-theme-primary);
  }
</style>