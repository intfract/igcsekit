<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let rows: [string, string][] = [
    ['Movement', 'An action by an organism or a part of an organism that causes a change in position or place'],
    ['Respiration', 'The breakdown of nutrient molecules to release energy for metabolism'],
    ['Sensitivity', 'The ability to detect changes or stimuli in the environment and respond appropriately'],
    ['Growth', 'A permanent increase in size or dry mass by an increase in cell number or size'],
    ['Reproduction', 'The process of producing new offspring of the same kind of organism'],
    ['Excretion', 'The process of removing waste products of metabolism and toxic material'],
    ['Nutrition', 'The intake of food for the absorption of nutrients'],
  ]
</script>

<section>
  <h1>Organisms</h1>
  <h2>Characteristics</h2>
  <DataTable>
    <Head>
      <Row>
        <Cell>Characteristic</Cell>
        <Cell>Definition</Cell>
      </Row>
    </Head>
    <Body>
      {#each rows as row}
        <Row>
          {#each row as cell,i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h2>Classification</h2>
  <h3>Species</h3>
  <p>A species is a group of organisms that can reproduce to give birth to fertile offspring. This means that sterile animals like mules are not a species.</p>
</section>