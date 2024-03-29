<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string][] = [
    ['Pencil Line', 'The starting line for the substances'],
    ['Front', 'The place where the solvent stops moving'],
    ['Paper', 'The chromotography paper used for the experiment'],
    ['Retardation Factor', 'Fraction of distance travelled by solute compared to solvent'],
  ]
</script>

<section>
  <h1>Experimental Techniques</h1>
  <h2>Measurement</h2>
  <p>Appropriate apparatus must be used when measuring time, temperature, mass, and volume.</p>
  <h3>Volume</h3>
  <ul>
    <li>Measuring cylinders measure medium volumes accurately</li>
    <li>Burettes have taps and can measure medium volumes even more accurately</li>
    <li>Pipettes are used to release drops of a liquid and are not good for measuring</li>
    <li>Graduated pipettes have lines on them and can measure small volumes accurately</li>
  </ul>
  <h2>Purity</h2>
  <h3>Chromatography</h3>
  <p>Chromatography is used to separate soluble substances from each other using a solvent and chromatography paper. Some common uses of chromatography include separating:</p>
  <ul>
    <li>food colouring</li>
    <li>ink</li>
  </ul>
  <DataTable>
    <Head>
      <Row>
        <Cell>Term</Cell>
        <Cell>Definition</Cell>
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