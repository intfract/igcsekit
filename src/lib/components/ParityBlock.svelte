<script lang="ts">
  export let block: number[][]
  export let parity: 0 | 1 = 0
  export let error: [number, number] | [] = []

  let parityBlock: string[][] = [
    ['', 'Parity Bit', ...block[0].map((x, i) => `Bit ${i + 2}`)],
    ...block.map((x, i) => [`Byte ${i + 1}`, ((x.reduce((prev, next) => prev + next) + parity) % 2).toString(), ...x.map(y => y.toString())]),
  ]

  let parityByte: number[] = []

  for (let i = 1; i < block[0].length + 2; i++) {
    let total = 0
    for (let j = 1; j < block.length + 1; j++) {
      total += Number(parityBlock[j][i])
    }
    parityByte.push((total + parity) % 2)
  }

  parityBlock.push(['Parity Byte', ...parityByte.map(x => x.toString())])

  if (error.length) {
    parityBlock[error[0] + 1][error[1] + 2] = Number(!Number(parityBlock[error[0] + 1][error[1] + 2])).toString()
    console.log(parityBlock)
  }
</script>

<div class="block">
  <div class="square" style={`grid-template-columns: repeat(${parityBlock[0].length}, 64px); grid-template-rows: repeat(${parityBlock.length}, 64px);`}>
    {#each parityBlock as row,i}
      {#each row as cell,j}
        <div class="cell" class:red={error.length && (i === error[0] + 1 || j === error[1] + 2)}>{cell}</div>
      {/each}
    {/each}
  </div>
</div>

<style>
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .square {
    display: grid;
    width: fit-content;
    user-select: none;
  }

  .cell {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .red {
    background-color: var(--mdc-theme-error);
  }
</style>