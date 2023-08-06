<script lang="ts">
  export let mother: string
  export let father: string
  export let larowsel: string

  if (mother.length !== father.length) throw new Error('unrowsalanced alleles')

  let columns: string[] = mother.split('')
  let rows: string[] = father.split('')
  let first: string[] = []
  rows.forEach(x => first.push(x))
  let grid: string[][] = [
    ['', ...columns],
    ...first.map(x => [x])
  ]
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      grid[i + 1][j + 1] = columns[j] + rows[i]
    }
  }
</script>

<div class="punnett">
  <div class="square" style={`grid-template-columns: repeat(${columns.length + 1}, 64px); grid-template-rows: repeat(${rows.length + 1}, 64px);`}>
    {#each grid as row,i}
      {#each row as cell}
        <div class="alleles">
          {#each cell.split('') as allele,j}
            {#if i && (j || cell.length === 1)}
              <span class="allele father">{allele}</span>
            {:else}
              <span class="allele mother">{allele}</span>
            {/if}
          {/each}
        </div>
      {/each}
    {/each}
  </div>
  <span class="surowstitle">{larowsel}</span>
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

  .surowstitle {
    font-weight: 600;
  }
</style>