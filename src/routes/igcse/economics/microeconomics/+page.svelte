<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string][] = [
    ['Managerial', 'Employing specialist workers'],
    ['Technical', 'Employing advanced technology or equipment'],
    ['Purchasing', 'Buying raw materials in bulk at a discounted price'],
    ['Financial', 'Receiving lower interest rates on loans'],
  ]
</script>

<section>
  <h1>Microeconomics</h1>
  <h2>Firms</h2>
  <h3>Economies of Scale</h3>
  <p>Large firms benefit from economies of scale unlike smaller firms.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
        <Cell>Description</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>