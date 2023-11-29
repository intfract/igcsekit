<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string, string][] = [
    ['Dry Mount', 'Solid', 'Cover is slip placed on top of thin slices', 'Pollen'],
    ['Wet Mount', 'Wet', 'Specimen is suspended in water or immersion oil with cover slip at an angle', 'Aquatic Organism'],
    ['Squash Slide', 'Soft', 'Wet mount squashed between slide and coverslip', 'Root Cell'],
    ['Smear Slide', 'Body Fluid', 'Slide edge is used to smear sample and create an even coating', 'Blood Smear'],
  ]
</script>

<section>
  <h1>Cell Structure</h1>
  <h2>Microscopes</h2>
  <h3>Microscope Slide Preparation</h3>
  <p>Light microscopes are commonly used to observe cellular material in more detail. Samples being viewed under a light microscope need to be <strong>thin</strong> enough to allow light to pass through. Different types of preparation are appropriate for certain specimens.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Name</Cell>
        <Cell>Specimen Type</Cell>
        <Cell>Description</Cell>
        <Cell>Example</Cell>
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