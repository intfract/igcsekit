<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import CodeBlock from '$lib/components/CodeBlock.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let linearSearch: string = 'DECLARE Items : ARRAY\nItems[1] ← "alpha"\nItems[2] ← "bravo"\nItems[3] ← "charlie"\n\nFOR Index ← 1 TO 3\n\tOUTPUT Items[Index]\nNEXT'
  let totalling: string = 'Total ← Total + Value'
  let counting: string = 'Counter ← Counter + 1'
  let statistics: string = 'DECLARE Numbers : ARRAY\nNumbers[1] ← 1\nNumbers[2] ← 2\nNumbers[3] ← 3\nNumbers[4] ← 10\nFOR Index ← 1 TO 4\n\tOUTPUT Numbers[Index]\nNEXT'

  let a: [string, string, string][] = [
    ['Normal', 'Data that should be accepted', '10'],
    ['Abnormal', 'Data that should be rejected', 'ten'],
    ['Extreme', 'Lowest or highest acceptable values', '1'],
    ['Boundary', 'Lowest or highest acceptable and unacceptable values', '0, 1'],
  ]
</script>

<section>
  <h1>Algorithms</h1>
  <h2>Program Development Life Cycle</h2>
  <p>The development of a program involves multiple stages.</p>
  <ul>
    <li>
      <strong>Analysis</strong>: abstraction, decomposition of the problem, identification of the problem and requirements
    </li>
    <li>
      <strong>Design</strong>: decomposition, structure diagrams, flowcharts, pseudocode
    </li>
    <li>
      <strong>Coding</strong>: writing program code and iterative testing
    </li>
    <li>
      <strong>Testing</strong>: decomposition, structure diagrams, flowcharts, pseudocode
    </li>
  </ul>
  <h2>Problem Solving</h2>
  <p>Every computer system made up of sub-systems which are made up of further sub-systems.</p>
  <h3>Analysis</h3>
  <p>Problems can be decomposed into 4 parts:</p>
  <ul>
    <li>inputs</li>
    <li>outputs</li>
    <li>processes</li>
    <li>storage</li>
  </ul>
  <h3>Design</h3>
  <p>Different methods can be used to contruct a solution to a problem such as:</p>
  <ul>
    <li>structure diagrams</li>
    <li>flowcharts</li>
    <li>pseudocode</li>
  </ul>
  <h2>Solution Methods</h2>
  <p>There are different methods that can be used to solve a problem such as:</p>
  <ul>
    <li>linear search</li>
    <li>bubble sort</li>
    <li>totalling</li>
    <li>counting</li>
    <li>
      finding the:
      <ul>
        <li>minimum</li>
        <li>maximum</li>
        <li>average</li>
      </ul>
    </li>
  </ul>
  <h3>Linear Search</h3>
  <CodeBlock code={linearSearch} runnable={true}></CodeBlock>
  <h3>Totalling</h3>
  <CodeBlock code={totalling} runnable={false}></CodeBlock>
  <h3>Counting</h3>
  <CodeBlock code={counting} runnable={false}></CodeBlock>
  <h3>Statistics</h3>
  <CodeBlock code={statistics} runnable={true}></CodeBlock>
  <h2>Data Checks</h2>
  <h3>Validation</h3>
  <p>Validation is an automated check carried out by a computer to make sure that data entered is acceptable. These checks include:</p>
  <ul>
    <li>range</li>
    <li>length</li>
    <li>type</li>
    <li>presence</li>
    <li>format</li>
  </ul>
  <p>A check digit is also a form of validation.</p>
  <h3>Verification</h3>
  <p>Verification can be an automated or manual check carried out by a computer or a human to make sure that data entered is the same as the data that was intended to be input. These checks include:</p>
  <ul>
    <li>double-entry</li>
    <li>visual</li>
  </ul>
  <Callout emoji="🤔">
    Websites often use double-entry to confirm passwords.
  </Callout>
  <h2>Test Data</h2>
  <p>There are 4 different types of test data. Test data is used to check whether a program is working according to plan.</p>
  <p>The table below shows the testing data for a program that only accepts positive numbers.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Type</Cell>
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
  <h2>Trace Table</h2>
  <p>A trace table shows the state of an algorithm throughout a dry-run. It displays information such as:</p>
  <ul>
    <li>variables</li>
    <li>outputs</li>
    <li>user prompts</li>
  </ul>
  <h2>Error Identification</h2>
  <p>Algorithms written by other people may have errors present. Common errors include:</p>
  <ul>
    <li>
      syntax errors
      <ul>
        <li>spelling mistakes</li>
        <li>typos that may crash the algorithm</li>
      </ul>
    </li>
    <li>
      logic errors
      <ul>
        <li>endless loops</li>
        <li>mistakes in boolean expressions</li>
      </ul>
    </li>
  </ul>
  <h2>Writing Algorithms</h2>
  <p>Algorithms can be written using:</p>
  <ul>
    <li>pseudocode</li>
    <li>program code</li>
    <li>flowchart symbols</li>
  </ul>
  <Callout emoji="🤔">
    It is recommended to use python when given the choice to use program code!
  </Callout>
</section>