<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string, string][] = [
    ['Xylem', 'Middle', 'Middle', 'Top'],
    ['Phloem', 'Edge', 'Edge', 'Bottom'],
  ]
</script>

<section>
  <h1>Plant Transport</h1>
  <h2>Transport Tissue Structure</h2>
  <h3>Dicotyledonous Plant</h3>
  <p>Dicotyledonous plants have:</p>
  <ul>
    <li>seeds that contain 2 leaves</li>
    <li>a network of veins</li>
    <li>leaves that usually have broad blades and stalks</li>
    <li><strong>tap roots</strong> with lateral branches</li>
  </ul>
  <p>Herbaceous dicotyledonous plants have a relatively short life cycle (1 growing season) and non-woody tissue unlike trees.</p>
  <h3>Diagrams</h3>
  <p>Transport tissues such as xylem and phloem are distributed differently across the roots, stems, and leaves of plants. Transverse (cross) sections of these plant parts show the distribution of other tissue as well.</p>
  <h3>Distribution</h3>
  <p>Xylem are central while phloem are further from the middle. When leaves branch out from the stem, it causes the xylem and phloem to bend away from the middle of the plant. This means the xylem end up on the top of the phloem in the vascular bundles.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Tissue</Cell>
        <Cell>Root</Cell>
        <Cell>Stem</Cell>
        <Cell>Leaf</Cell>
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