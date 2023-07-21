<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, boolean, string][] = [
    ['SSS', true, 'All 3 sides are known'],
    ['SAS', true, 'Known angle is between 2 known sides'],
    ['ASS', false, 'Opposite and adjacent sides of the known angle is known'],
    ['SAA', true, 'Opposite and adjacent angles of the known side is known'],
    ['ASA', true, 'Known side is between 2 known angles'],
    ['AAA', false, 'All 3 angles are known'],
  ]
</script>

<section>
  <h1>Geometry</h1>
  <h2>Congruence</h2>
  <p>Shapes are congruent if they have identical angles and sides. They must have the same:</p>
  <ul>
    <li>number of angles</li>
    <li>angle values</li>
    <li>number of sides</li>
    <li>side lengths</li>
  </ul>
  <p>Congruence is preserved if a shape is:</p>
  <ul>
    <li>
      <strong>translated</strong>
    </li>
    <li>
      <strong>rotated</strong>
    </li>
    <li>
      <strong>reflected</strong>
    </li>
  </ul>
  <p>However, congruency is not preserved if the shape is <strong>scaled</strong> because the side lengths would not be equal.</p>
  <h3>Congruent Triangles</h3>
  <p>Only 3 pieces of information are required to prove congruence or solve a triangle. Despite being true in most cases, there are some situations where this statement does not appear to be true.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Rule</Cell>
        <Cell>Valid</Cell>
        <Cell>Description</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 1}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {:else}
                {cell}
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>AAA congruence does not always work because the side lengths could be different. ASS congruence does not always work because it is possible for the triangle to have 2 solutions. That being said, there are cases where only 1 solution is possible using ASS congruence when:</p>
  <ul>
    <li>angle &GreaterEqual; 90</li>
    <li>opposite &GreaterEqual; adjacent</li>
    <li>opposite = adjacent &times; sine of angle (right triangle)</li>
  </ul>
</section>