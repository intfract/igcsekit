<script lang='ts'>
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let rows: [string, boolean, boolean, boolean][] = [
    ['Thermal Physics', true, true, true],
    ['Waves', true, true, true],
    ['Electromagnetism', true, true, false],
  ]

  let page = 'IGCSE Physics'
</script>

<svelte:head>
  <title>{page}</title>
  <meta property="og:title" content={page}>
  <meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Physics</h1>
  <h2>Syllabus</h2>
  <p>The double and combined column refer to <a href="https://www.cambridgeinternational.org/Images/664572-2025-2027-syllabus.pdf" target="_blank">co-ordinated sciences</a> and <a href="https://www.cambridgeinternational.org/images/557017-2022-syllabus-.pdf" target="_blank">combined sciences</a> respectively.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
        <Cell>Separate</Cell>
        <Cell>Double</Cell>
        <Cell>Combined</Cell>
      </Row>
    </Head>
    <Body>
      {#each rows as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 0 && typeof cell === 'string'}
                <a href={[data.pathname, cell.replaceAll(' ', '_').toLowerCase()].join('/')}>{cell}</a>
              {:else}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>