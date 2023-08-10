<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import { math } from '$lib/utils/katex'
  import { sub } from '$lib/utils/html'

  let a: [string, string, string, string, string][] = [
    ['Alkene', '?', 'Ethene', 'Propene', 'Butene'],
    ['Alkane', 'Methane', 'Ethane', 'Propane', 'Butane'],
    ['Alcohol', 'Methanol', 'Ethanol', 'Propanol', 'Butanol'],
  ]
</script>

<section>
  <h1>Organic Chemistry</h1>
  <h2>Compound Names</h2>
  <p>Organic chemistry deals with 3 types of organic (carbon-containing) molecules in IGCSE:</p>
  <ul>
    <li>Alkenes</li>
    <li>Alkanes</li>
    <li>Alcohols</li>
  </ul>
  <p>All 3 groups of molecules contain carbon and hydrogen atoms. However, their structures are slightly different. Each molecule from these groups is named using a prefix that denotes the <strong>number of carbon atoms</strong> and a suffix that identifies the <strong>homologous series</strong>.</p>
  <p>Only the names of the first 4 molecules of each group need to be known for IGCSE.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Homologous Series</Cell>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
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