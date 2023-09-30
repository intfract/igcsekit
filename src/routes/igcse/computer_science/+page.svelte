<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'

  export let data

  let a: [string, string][] = [
    ['Data Transmission', 'Types, Error Detection, Encryption'],
    ['Hardware', 'Computer Artchitecture, IO Devices, Data Storage, Network'],
    ['Software', 'Types and Interrupts, Programming Languages and IDEs'],
    ['The Internet', 'WWW, Digital Currency, Cyber Security'],
    ['Emerging Technologies', 'Automated Systems, Robotics, Artificial Intelligence'],
  ]

  let page = 'IGCSE Computer Science'
</script>

<svelte:head>
  <title>{page}</title>
  <meta property="og:title" content={page}>
  <meta property="og:description" content={`Read ${page} notes and answer topic questions for free!`}>
</svelte:head>

<section>
  <h1>Computer Science</h1>
  <h2>Syllabus</h2>
  <p>In 2023, the <strong>pre-release material was removed</strong> from the course along with the security and ethics chapter. Cyber security is now part of the "The internet and its uses" chapter. The completely new "Automated and emerging technologies" introduces robotics and artificial intelligence into the syllabus.</p>
  <p>The 2023 syllabus update was a <em>breaking</em> change.</p>
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