<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  type Glucose = 'Alpha' | 'Beta'

  let a: [string, Glucose, boolean][] = [
    ['Amylose', 'Alpha', false],
    ['Amylopectin', 'Alpha', true],
    ['Cellulose', 'Beta', false],
    ['Glycogen', 'Alpha', true],
  ]
</script>

<section>
  <h1>Biological Molecules</h1>
  <h2>Testing</h2>
  <h3>Reducing Sugar Test</h3>
  <h2>Carbohydrates</h2>
  <h3>Monosaccharide</h3>
  <p>A monosaccharide is the smallest repeating unit of a carbohydrate molecule. The most common example is glucose.</p>
  <h4>Glucose</h4>
  <p>Glucose is an aldehyde with the formula C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. It plays a major role in providing energy for an organism in the form of respiration. Glucose:</p>
  <ul>
    <li>can be linear or cyclic but is mostly found in cyclic form</li>
    <li>has 2 isomers in cyclic form named alpha and beta</li>
    <li>
      is a monomer that can join together to form polysaccharides such as:
      <ul>
        <li>starch</li>
        <li>cellulose</li>
        <li>glycogen</li>
      </ul>
    </li>
  </ul>
  <p>The carbons in glucose are numbered from the functional group (aldehyde).</p>
  <ul>
    <li>Carbon 1 and 4 form <strong>glycosidic bonds</strong> when 2 glucose molecules join together</li>
    <li>A water molecule is produced during glycosidic bonding making it a condensation reaction</li>
  </ul>
  <h3>Polysaccharide</h3>
  <p>A polysaccharide is a repeating chain of monosaccharides. Their size is much greater making them hard to transport through diffusion. Polysaccharides can be:</p>
  <ul>
    <li>branched or unbranced</li>
    <li>made up of either alpha or beta glucose</li>
    <li>broken down through a hydrolysis reaction</li>
    <li>used as compact storage molecules</li>
  </ul>
  <DataTable>
    <Head>
      <Row>
        <Cell>Polysaccharide</Cell>
        <Cell>Glucose</Cell>
        <Cell>Branched</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if typeof cell === 'string'}
                {cell}
              {:else}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>A <strong>hydrolysis</strong> reaction is the opposite of a condensation reaction. Water is required to breaak glycosidic bonds.</p>
  <h2>Lipids</h2>
  <h3>Phospholipid</h3>
  <p>A phospholipid has 1 hydrophilic phosphate head and 2 hydrophobic fatty acid tails. The phosphate group and the fatty acids are attached to a glycerol molecule.</p>
  <p>A fatty acid tail can be saturated or unsaturated. An unsaturated fatty acid will have double bonds between carbon atoms which increase the fluidity of membranes.</p>
  <h2>Proteins</h2>
  <p>A protein is made up of many amino acids.</p>
  <h2>Water</h2>
</section>