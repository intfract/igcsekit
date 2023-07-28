<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let rows: [string, boolean, boolean, boolean][] = [
    ['Organisms', true, true, true],
    ['Cells', true, true, true],
    ['Reproduction', true, true, true],
    ['Inheritance', true, true, false],
  ]

  let page = 'IGCSE Biology'
</script>

<svelte:head>
	<title>{page}</title>
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
              {#if i === 0 && typeof cell === 'string'}
                <a href={[data.url, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
              {:else}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <LinkTree url={data.url} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>