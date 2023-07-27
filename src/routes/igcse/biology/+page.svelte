<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  export let data

  let rows: [string, string, string, string][] = [
    ['Organisms', 'check', 'check', 'check'],
    ['Cells', 'check', 'check', 'check'],
    ['Reproduction', 'check', 'check', 'check'],
    ['Inheritance', 'check', 'check', 'close'],
  ]

  let page = 'IGCSE Biology'
</script>

<svelte:head>
	<title>{page}y</title>
	<meta property="og:title" content={page}>
	<meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Biology</h1>
  <h2>Syllabus</h2>
  <p>The double science and triple science column refer to <a href="https://www.cambridgeinternational.org/Images/597069-2023-2024-syllabus.pdf" target="_blank">co-ordinated sciences</a> and <a href="https://www.cambridgeinternational.org/images/557017-2022-syllabus-.pdf" target="_blank">combined sciences</a> respectively.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
        <Cell>Single Science</Cell>
        <Cell>Double Science</Cell>
        <Cell>Triple Science</Cell>
      </Row>
    </Head>
    <Body>
      {#each rows as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 0}
                <a href={[data.url, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
              {:else}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell}</span>
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>