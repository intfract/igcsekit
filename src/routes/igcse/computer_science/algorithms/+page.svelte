<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import CodeBlock from '$lib/components/CodeBlock.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let linearSearch: string = 'DECLARE Items : ARRAY\nItems[1] ← "alpha"\nItems[2] ← "bravo"\nItems[3] ← "charlie"\nQuery ← "bravo"\nFound ← FALSE\nIndex ← 1\nREPEAT\n\tIF Items[Index] = Query THEN\n\t\tFound ← TRUE\n\tELSE\n\t\tIndex ← Index + 1\n\tENDIF\nUNTIL Found OR Index > 3\nIF Found THEN\n\tOUTPUT Query, " found at index ", Index\nENDIF'
  let totalling: string = 'Total ← Total + Value'
  let counting: string = 'Counter ← Counter + 1'
  let statistics: string = 'DECLARE Numbers : ARRAY\nNumbers[1] ← 1\nNumbers[2] ← 2\nNumbers[3] ← 3\nNumbers[4] ← 10\nDECLARE Max ← -INFINITY\nDECLARE Min ← INFINITY\nDECLARE Avg\nTotal ← 0\nFOR Index ← 1 TO 4\n\tIF Numbers[Index] > Max THEN\n\t\tMax ← Numbers[Index]\n\tENDIF\n\tIF Numbers[Index] < Min THEN\n\t\tMin ← Numbers[Index]\n\tENDIF\n\tTotal ← Total + Numbers[Index]\nNEXT\nAvg ← Total / 4\nOUTPUT Max\nOUTPUT Min\nOUTPUT Avg'
  let bubbleSort: string = 'DECLARE Items : ARRAY\nItems[1] ← 6\nItems[2] ← 9\nItems[3] ← 4\nItems[4] ← 2\nSwapped ← FALSE\nN ← 4\nWHILE N > 1 AND NOT Swapped DO\n\tSwapped ← FALSE\n\tN ← N - 1\n\tFOR Index ← 1 TO N\n\t\tIF Items[Index] > Items[Index + 1] THEN\n\t\t\tTemp ← Items[Index]\n\t\t\tItems[Index] ← Items[Index + 1]\n\t\t\tItems[Index + 1] ← Temp\n\t\t\tSwapped ← TRUE\n\t\tENDIF\n\tNEXT\nENDWHILE\nFOR Index ← 1 TO 4\n\tOUTPUT Items[Index]\nNEXT'

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
    <li>totalling</li>
    <li>counting</li>
    <li>linear search</li>
    <li>bubble sort</li>
    <li>
      finding the:
      <ul>
        <li>minimum</li>
        <li>maximum</li>
        <li>average</li>
      </ul>
    </li>
  </ul>
  <h3>Totalling</h3>
  <p>Totalling is done inside a loop. It is often used to calculate averages.</p>
  <CodeBlock code={totalling}></CodeBlock>
  <h3>Counting</h3>
  <p>Counting is often done inside while loops and used to iterate through an array.</p>
  <CodeBlock code={counting}></CodeBlock>
  <h3>Linear Search</h3>
  <CodeBlock code={linearSearch} runnable></CodeBlock>
  <h3>Bubble Sort</h3>
  <p>Bubble sort is used to sort an array in ascending or descending order. However, it can also sort an array of strings alphabetically. Some bubble sort algorithms may differ, but the core idea of swapping items is the same.</p>
  <CodeBlock code={bubbleSort} runnable></CodeBlock>
  <Callout emoji="🤔">
    It is possible to swap items in an <strong>array of numbers</strong> without using a temporary variable.
  </Callout>
  <h3>Statistics</h3>
  <CodeBlock code={statistics} runnable></CodeBlock>
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
  <p>Aside from pseudocode, only 3 programming languages are allowed to be used in the unseen scenario question.</p>
  <ul>
    <li>Python</li>
    <li>Java</li>
    <li>Visual Basic</li>
  </ul>
  <Callout emoji="🤔">
    It is recommended to use python when given the choice to use program code!
  </Callout>
</section>