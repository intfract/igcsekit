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
  <h2>Banking</h2>
  <h3>Money</h3>
  <p>Money has attributes such as:</p>
  <ul>
    <li>scarcity</li>
    <li>uniformity</li>
    <p>portability</p>
    <li>divisibility</li>
    <li>acceptability</li>
    <li>durability</li>
  </ul>
  <p>Money has attributes such as:</p>
  <ul>
    <li>store of value</li>
    <li>measure of value</li>
    <li>standard of deferred payment</li>
    <li>medium of exchange</li>
  </ul>
  <h2>Firms</h2>
  <h3>Economies of Scale</h3>
  <p>Large firms benefit from economies of scale unlike smaller firms.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Economy</Cell>
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