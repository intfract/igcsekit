<script lang="ts">
  export let mother: string
  export let father: string
  export let label: string

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
</script>

<div class="punnett">
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
  <span class="subtitle">{label}</span>
</div>

<style>
  .punnett {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .square {
    display: grid;
    width: fit-content;
    user-select: none;
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

  .subtitle {
    font-weight: 600;
  }
</style>