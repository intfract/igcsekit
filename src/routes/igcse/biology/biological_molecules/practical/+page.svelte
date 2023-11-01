<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string, string, boolean][] = [
    ['Benedict\'s', 'Reducing Sugar', 'Blue', 'Red', true],
    ['Biuret', 'Protein', 'Blue', 'Purple', false],
    ['Ethanol & Water', 'Lipid', 'Clear', 'White Emulsion', false],
  ]
</script>

<section>
  <h1>Biological Molecules</h1>
  <h2>Food Tests</h2>
  <DataTable>
    <Head>
      <Row>
        <Cell>Test</Cell>
        <Cell>Molecule</Cell>
        <Cell>Negative</Cell>
        <Cell>Positive</Cell>
        <Cell>Heat Required</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if typeof cell === 'string'}
                {cell}
              {:else}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>