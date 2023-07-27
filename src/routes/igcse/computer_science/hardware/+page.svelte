<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string][] = [
    ['Current Instruction Register', 'CIR', 'Stores the current instruction being decoded and executed'],
    ['Accumulator', 'ACC', 'Stores data temporarily for ALU calculations'],
    ['Memory Address Register', 'MAR', 'Stores the address of the data that needs to be fetched'],
    ['Memory Data Register', 'MDR', 'Stores data that has been fetched from memory'],
    ['Program Counter', 'PC', 'Stores the address for the next instruction'],
  ]
</script>

<section>
  <h1>Hardware</h1>
  <h2>Computer Architecture</h2>
  <p>Von Neumann architecture is the concept used to build nearly all computers.</p>
  <ul>
    <li><strong>Data and instructions</strong> are stored in the <strong>same memory</strong> (RAM) as binary</li>
    <li>CPU fetches instructions from memory and executes them <strong>serially</strong> (one at a time)</li>
    <li>CPU stores results in memory</li>
  </ul>
  <DataTable>
    <Head>
      <Row>
        <Cell>Term</Cell>
        <Cell>Abbreviation</Cell>
        <Cell>Function</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>