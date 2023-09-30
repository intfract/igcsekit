<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let a: [string, string][] = []

  let page = 'IGCSE Economics'
</script>

<svelte:head>
  <title>{page}</title>
  <meta property="og:title" content={page}>
  <meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Economics</h1>
  <h2>Syllabus</h2>
  <p>No major changes were made to this syllabus.</p>
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
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>