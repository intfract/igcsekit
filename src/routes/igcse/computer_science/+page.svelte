<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import LinkTree from '$lib/components/LinkTree.svelte'
  import MonacoEditor from '$lib/components/MonacoEditor.svelte'

  export let data

  let a: [string, string][] = [
    ['Data Representation', 'Number Systems, Files, Compression'],
    ['Data Transmission', 'Types, Error Detection, Encryption'],
    ['Hardware', 'Computer Artchitecture, IO Devices, Data Storage, Network'],
    ['Software', 'Types and Interrupts, Programming Languages and IDEs'],
    ['The Internet', 'WWW, Digital Currency, Cyber Security'],
    ['Emerging Technologies', 'Automated Systems, Robotics, Artificial Intelligence'],
    ['Algorithms', 'Algorithm Design, Problem Solving'],
    ['Programming', 'Concepts, Arrays, File Handling'],
    ['Databases', 'Data Types, Primary Key, SQL'],
    ['Boolean Logic', 'Logic Gates, Logic Circuits, Truth Table, Logic Expression'],
  ]

  let code = 'DECLARE Items : ARRAY\nPROCEDURE Swap\n\tTemp ← Items[Index]\n\tItems[Index] ← Items[Index + 1]\n\tItems[Index + 1] ← Temp\n\tSwapped ← TRUE\nENDPROCEDURE\nN ← 0\nItem ← ""\nREPEAT\n\tOUTPUT "Enter an item or leave blank to begin sorting."\n\tINPUT Item\n\tIF Item <> "" THEN\n\t\tN ← N + 1\n\t\tItems[N] ← Item\n\tENDIF\nLength ← N\nUNTIL Item = ""\nSwapped ← TRUE\nWHILE N > 1 AND Swapped DO\n\tSwapped ← FALSE\n\tN ← N - 1\n\tFOR Index ← 1 TO N\n\t\tIF Items[Index] > Items[Index + 1] THEN\n\t\t\tCALL Swap\n\t\tENDIF\n\tNEXT\nENDWHILE\nOUTPUT Length, " items have been sorted!"\nFOR Index ← 1 TO Length\n\tOUTPUT Items[Index]\nNEXT'

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
  <p>The 2023 syllabus update was a <em>breaking</em> change. This means that old textbooks are largely incompatible with the new syllabus.</p>
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
  <h2>Pseudocode</h2>
  <p>Pseudocode must be handwritten in the computer programming paper. The pseudocode editor below allows you to compiler CIE psueodocode into JavaScript and run it.</p>
  <p>The editor supports:</p>
  <ul>
    <li>declaration of <code>ARRAY</code> type without fixed lengths or types</li>
    <li>
      declaration of:
      <ul>
        <li>
          <code>STRING</code>
        </li>
        <li>
          <code>INTEGER</code>
        </li>
        <li>
          <code>REAL</code>
        </li>
      </ul>
    </li>
    <li>all 3 forms of loops</li>
    <li>procedures without any arguments</li>
    <li>functions without types for arguments or return values</li>
    <li>
      library routines limited to:
      <ul>
        <li>
          <code>RANDOM</code>
        </li>
        <li>
          <code>ROUND</code>
        </li>
        <li>
          <code>LENGTH</code>
        </li>
        <li>
          <code>SUBSTRING</code>
        </li>
        <li>
          <code>UPPER</code>
        </li>
        <li>
          <code>LOWER</code>
        </li>
      </ul>
    </li>
  </ul>
  <p>The editor does <strong>not</strong> support:</p>
  <ul>
    <li><code>CHAR</code> data type</li>
    <li>declaring an <code>ARRAY</code> with a specified length and type like <code>DECLARE TicTacToe: ARRAY[1:3, 1:3] OF INTEGER</code></li>
    <li>using <strong>spaces</strong> for indentation</li>
    <li>
      some library routines such as:
      <ul>
        <li>
          <code>MOD</code>
        </li>
        <li>
          <code>DIV</code>
        </li>
      </ul>
    </li>
  </ul>
  <MonacoEditor></MonacoEditor>
  <LinkTree url={data.pathname} glob={import.meta.glob('./**/+page.svelte')}></LinkTree>
</section>