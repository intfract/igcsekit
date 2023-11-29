<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let rows: [string][] = [
    ['Cell Structure'],
  ]

  let page = 'AS Biology'
</script>

<svelte:head>
  <title>{page}</title>
  <meta property="og:title" content={page}>
  <meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Biology</h1>
  <h2>Syllabus</h2>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
      </Row>
    </Head>
    <Body>
      {#each rows as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              <a href={[data.pathname, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>