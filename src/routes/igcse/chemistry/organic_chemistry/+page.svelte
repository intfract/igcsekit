<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import { math } from '$lib/utils/katex'
  import { sub } from '$lib/utils/html'

  let prefixes: string[] = [
    'Meth',
    'Eth',
    'Prop',
    'But',
  ]

  let suffixes: string[] = [
    'ene',
    'ane',
    'anol',
  ]

  let a: string[][] = []

  for (let i = 0; i < 4; i++) {
    const temp: any[] = []
    for (let j = 0; j < 4; j++) {
      let x: string = ''
      if (j) {
        x = prefixes[i] + suffixes[j - 1]
      } else {
        x = (i + 1).toString()
      }
      if (!i && j === 1) x = '?'
      temp.push(x)
    }
    a.push(temp)
  }
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
  <ul>
    <li>Alkene: <em>ene</em></li>
    <li>Alkane: <em>ane</em></li>
    <li>Alcohol: <em>anol</em></li>
  </ul>
  <p>Only the names of the first 4 molecules of each group need to be known for IGCSE.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Carbon Atoms</Cell>
        <Cell>Alkenes</Cell>
        <Cell>Alkanes</Cell>
        <Cell>Alcohols</Cell>
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
  <h2>Homologous Series</h2>
  <p>Homologous series are a family of compounds with the same general formula and similar chemical properties. All compounds in a homologous series contain the same <strong>functional group</strong>.</p>
  <ul>
    <li>Alkene: double carbon bonds</li>
    <li>Alkane: <em>none</em></li>
    <li>Alcohol: hydroxide</li>
  </ul>
</section>