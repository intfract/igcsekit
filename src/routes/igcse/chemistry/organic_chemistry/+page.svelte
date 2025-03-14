<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import { math } from '$lib/utils/katex'
  import { sub } from '$lib/utils/html'

  let prefixes: string[] = ['Meth', 'Eth', 'Prop', 'But']

  let suffixes: string[] = ['ene', 'ane', 'anol']

  let a: string[][] = []

  for (let i = 0; i < 4; i++) {
    const temp: any[] = []
    for (let j = 0; j < 4; j++) {
      let x: string = ''
      if (j) {
        x = prefixes[i] + suffixes[j - 1]
      } else {
        x = (i + 1).toString()
      }
      if (!i && j === 1) x = '?'
      temp.push(x)
    }
    a.push(temp)
  }

  let b: [string, string, boolean][] = [
    ['Alkenes', `C${sub('n')}H${sub('2n')}`, false],
    ['Alkanes', `C${sub('n')}H${sub('2n+2')}`, true],
    ['Alcohols', `C${sub('n')}H${sub('2n+1')}OH`, true]
  ]
</script>

<section>
  <h1>Organic Chemistry</h1>
  <h2>Compound Names</h2>
  <p>Organic chemistry deals with 3 types of organic (carbon-containing) molecules in IGCSE:</p>
  <ul>
    <li>Alkenes</li>
    <li>Alkanes</li>
    <li>Alcohols</li>
  </ul>
  <p>
    All 3 groups of molecules contain carbon and hydrogen atoms. However, their structures are
    slightly different. Each molecule from these groups is named using a prefix that denotes the <strong
      >number of carbon atoms</strong
    >
    and a suffix that identifies the <strong>homologous series</strong>.
  </p>
  <ul>
    <li>Alkene: <em>ene</em></li>
    <li>Alkane: <em>ane</em></li>
    <li>Alcohol: <em>anol</em></li>
  </ul>
  <p>Only the names of the first 4 molecules of each group need to be known for IGCSE.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Carbon Atoms</Cell>
        <Cell>Alkenes</Cell>
        <Cell>Alkanes</Cell>
        <Cell>Alcohols</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell, i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>
    <em>Methene</em> does not exist because it is impossible for a single carbon atom to form double
    bonds with itself.
  </p>
  <h2>Homologous Series</h2>
  <p>
    Homologous series are a family of compounds with the same general formula and similar chemical
    properties. Compounds in the same homologous series:
  </p>
  <ul>
    <li>have the same functional group</li>
    <li>have the same general formula</li>
    <li>have similar chemical properties</li>
    <li>display a trend in physical properties</li>
  </ul>
  <DataTable>
    <Head>
      <Row>
        <Cell>Series</Cell>
        <Cell>General Formula</Cell>
        <Cell>Saturated</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell, i}
            <Cell>
              {#if i === 2}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;"
                  >{cell ? 'check' : 'close'}</span
                >
              {:else}
                {@html cell}
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>
    Alkenes have double bonds because they are unsaturated (more carbon-hydrogen single bonds <em
      >can</em
    > be accomodated for). Alkanes are saturated with hydrogen atoms. Alcohols have a hydroxyl group
    attached to an alkyl group, meaning they are not hydrocarbons (due to the presence of an oxygen atom).
  </p>
  <h3>Alkenes</h3>
  <p>An alkene is an unsaturated hydrocarbon that contains 1 carbon-carbon double covalent bond.</p>
  <h4>Cracking</h4>
  <p>
    Cracking is the process of breaking down larger alkane molecules into smaller alkene molecules
    and either an alkane molecule or a hydrogen molecule.
  </p>
  <h3>Alkanes</h3>
  <p>
    An alkane is a saturated hydrocarbon that only contains single covalent bonds. Alkanes are less
    reactive than alkenes because they are saturated.
  </p>
  <h2>Fuels</h2>
  <h3>Fractional Distillation of Petroleum</h3>
  <p>
    Petroleum is a mixture of hydrocarbons with <strong>different boiling points</strong>. These
    hydrocarbons can be separated into fractions in a fractionating column.
  </p>
  <p>The temperature is not the same throughout the furnace.</p>
  <ul>
    <li>
      The bottom of the furnace is hot, so only the fraction with the highest boiling point
      (bitumen) can remain a liquid
    </li>
    <li>
      The top of the furnace is comparatively much cooler, so only the fraction with the lowest
      boiling point (refinery gas) can boil
    </li>
  </ul>
  <p>The different fractions have different uses.</p>
  <ul>
    <li>
      <strong>Refinery gas</strong>: Gas used in cooking and heating
    </li>
    <li>
      <strong>Gasoline</strong>: fuel used in cars
    </li>
    <li>
      <strong>Naphtha</strong>: a chemical feedstock
    </li>
    <li>
      <strong>Kerosene</strong>: jet fuel
    </li>
    <li>
      <strong>Diesel oil</strong>: fuel used in diesel engines
    </li>
    <li>
      <strong>Fuel oil</strong>: ships and home heating systems
    </li>
    <li>
      <strong>Lubricating oil</strong>: waxes, polishes, and lubricants
    </li>
    <li>
      <strong>Bitumen</strong>: making roads
    </li>
  </ul>
  <p>Fractions of petroleum are separated according to their boiling points.</p>
  <ol>
    <li>Petroleum is heated and vapour rises</li>
    <li>Vapour cools down as it rises through the furnace</li>
    <li>Fractions condense when the vapour reaches their boiling points</li>
  </ol>
  <h2>Polymer</h2>
  <p>
    A polymer is a <strong>long chain</strong> molecule formed from small repeating units called
    <strong>monomers</strong>.
  </p>
  <h3>Addition Polymerisation</h3>
  <p>
    The addition of multiple monomer units results in an addition polymer. Addition polymers have
    the <em>poly</em> prefix attached to the name of the monomer. For example,
    <strong>poly(ethene)</strong> is an addition polymer made from multiple ethene molecules.
  </p>
  <p>
    The orientation of each monomer does not matter as long as they have the same chemical structure
    and formula.
  </p>
  <h3>Condensation Polymerisation</h3>
  <p>
    Nylon is an example of a condensation polymer. Condensation polymerisation forms a polymer and a <strong
      >small molecular waste product</strong
    > while addition polymerisation only produces a polymer.
  </p>
  <p>
    Nylon is made from a dicarboxylic acid (a carboxylic acid with two carboxyl -COOH groups) and a
    diamine (an amine with two amine -NH2 groups).
  </p>
  <ol>
    <li>the dicarboxylic acid loses a hydroxyl group (-OH) from each carboxyl group (-C(=O)OH)</li>
    <li>the diamine loses one hydrogen (-H) from each amine group (-NH2)</li>
    <li>the hydrogen and hydroxyl combine to form water</li>
    <li>
      the remainder of the dicarboxylic acid, now -(O=)C-<strong>R</strong>-C(=O)- and the remainder
      of the diamine, now -(H)N-<strong>R</strong>-N(H)- combine to form a condensation polymer
      [-(O=)C-<strong>R</strong>-C(=O)N(H)-<strong>R</strong>-N(H)-]<sub>n</sub>
    </li>
  </ol>
  Nylon is a polyamide, whereas PET, a polyester, is made from a dicarboxylic acid and a diol (an alcohol
  with two hydroxyl -OH groups).
  <ol>
    <li>the dicarboxylic acid loses a hydroxyl group (-OH) from each carboxyl group (-C(=O)OH)</li>
    <li>the diol loses one hydrogen (-H) from each hydroxyl group (-OH)</li>
    <li>the hydrogen and hydroxyl combine to form water</li>
    <li>
      the remainder of the dicarboxylic acid, now -(O=)C-<strong>R</strong>-C(=O)- and the remainder
      of the diol, now -O-<strong>R</strong>-O- combine to form a condensation polymer [-(O=)C-<strong
        >R</strong
      >-C(=O)O-<strong>R</strong>-O-]<sub>n</sub>
    </li>
  </ol>
  <p>
    Proteins are natural polyamides. These are formed by the condensation polymerisation of amino
    acids, H2N-CH<strong>R</strong>-COOH (where
    <strong>R</strong> is any side chain), rather than dicarboxylic acids and diamines.
  </p>
  <p>
    While the structure of a synthetic polyamide like nylon looks like this: [-(O=)C-<strong
      >R</strong
    >-C(=O)N(H)-<strong>R</strong>-N(H)-]<sub>n</sub>
    <br />
    The structure of a polypeptide (protein) looks like this: [-(H)N-<strong>R</strong
    >-C(=O)N(H)-<strong>R</strong>-C(=O)-]<sub>n</sub>
    <br />
    Notice how each monomer unit in a protein has the remanence of an amine group
    <strong>and</strong> of a carboxyl group.
  </p>
</section>
