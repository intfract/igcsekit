<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  export let inputs: string[]
  export let output: string
  export let operation: (...bits: number[]) => number

  let table: number[][] = []
  let bits: number[] = []

  for (let i = 0; i < inputs.length; i++) {
    bits.push(0)
  }

  for (let i = 0; i < 2 ** inputs.length; i++) {
    bits.forEach((bit, index) => {
      bits[index] = Math.floor((i / 2 ** index) % 2)
    })
    table.push([...bits, operation(...bits)])
  }
</script>

<DataTable>
  <Head>
    <Row>
      {#each inputs as input}
        <Cell>{input}</Cell>
      {/each}
      <Cell>{output}</Cell>
    </Row>
  </Head>
  <Body>
    {#each table as row}
      <Row>
        {#each row as cell,i}
          <Cell>{cell}</Cell>
        {/each}
      </Row>
    {/each}
  </Body>
</DataTable>