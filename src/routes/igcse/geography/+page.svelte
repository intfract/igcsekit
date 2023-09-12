<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let a: [string, string][] = [
    ['Population', 'Dynamics, Structure, Distribution'],
    ['Migration', 'Reasons, Impacts'],
    ['Settlements', 'Service Provision, Urban Areas'],
    ['Urbanisation', 'Reasons, Impacts'],
  ]

  let b: [string, string][] = [
    ['Tectonics', 'Plate Movement, Volcanoes, Earthquakes'],
  ]

  let page = 'IGCSE Geography'
</script>

<svelte:head>
  <title>{page}</title>
  <meta property="og:title" content={page}>
  <meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Geography</h1>
  <h2>Syllabus</h2>
  <p>The CIE IGCSE Geography syllabus does not have a core and extended components. Candidates can either choose to do coursework or sit the alternative to coursework paper.</p>
  <h3>Human</h3>
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
            <Cell>
              {#if i === 0 && typeof cell === 'string'}
                <a href={[data.pathname, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
              {:else}
                {cell}
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h3>Natural</h3>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
        <Cell>Description</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 0 && typeof cell === 'string'}
                <a href={[data.pathname, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
              {:else}
                {cell}
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h3>Economic</h3>
</section>