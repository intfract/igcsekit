<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import Image from '$lib/components/Image.svelte'
  import fleming from '$lib/images/diagrams/fleming.png'
  import dc_motor from '$lib/images/diagrams/dc_motor.png'
  import commutators from '$lib/images/diagrams/commutators.png'

  let a: [string, boolean, boolean][] = [
    ['Magnetised', true, true],
    ['Magnetic', true, false],
    ['Not Magnetic', false, false],
  ]

  let b: [string, string, string][] = [
    ['Soft Iron', 'Easy', 'Easy'],
    ['Steel', 'Hard', 'Hard'],
  ]
</script>

<section>
  <h1>Electromagnetism</h1>
  <h2>Magnetism</h2>
  <h3>Magnetic Materials</h3>
  <p>There are 3 types of materials that can be classified by their magnetic properties.</p>
  <ul>
    <li>
      <strong>Magnets</strong>: magnetic materials that have a magnetic field with north and south poles
    </li>
    <li>
      <strong>Magnetic Materials</strong>: elements or alloys of:
      <ul>
        <li>iron</li>
        <li>nickel</li>
        <li>cobalt</li>
      </ul>
    </li>
    <li>
      <strong>Non-magnetic Materials</strong>: materials that do not interact with magnets
    </li>
  </ul>
  <Callout emoji="🤔">
    Steel is magnetic because it is a alloy containing iron (ferrous alloy).
  </Callout>
  <p>Magnets can only attract and repel some materials.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Type</Cell>
        <Cell>Attract</Cell>
        <Cell>Repel</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i}
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
  <p>Like poles attract and unlike poles repel. This is only true for magnetised materials because they all have north poles and south poles.</p>
  <h3>Magnetic Field Lines</h3>
  <p>A bar magnet is simply a magnetised rectangular block. Field lines are invisible lines that flow from the north pole to the south pole of the bar magnet.</p>
  <ul>
    <li>Magnetic fields always flow from north to south</li>
    <li>
      Arrows on the field lines should point:
      <ul>
        <li>away from the north pole</li>
        <li>into the south pole</li>
      </ul>
    </li>
    <li>The north arrow on a compass always points in the direction of the field lines</li>
  </ul>
  <Callout emoji="🤔">
    Compasses placed at the ends of each pole should point in the same direction.
  </Callout>
  <h3>Magnetic Hardness</h3>
  <p>Any magnetic material can become magnetised using another bar magnet or direct current. However, some materials are easier or harder to magnetise.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Material</Cell>
        <Cell>Magnetisation</Cell>
        <Cell>Demagnetisation</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell,i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>Materials with a higher magnetic hardness will take longer to magnetise, but their magnetic field will last longer. A soft iron core is used in transformers because it is easily magnetised and demagnetised.</p>
  <h3>Permanent Magnet</h3>
  <p>A permanent magnet will last longer than an electromagnet. They are made from hard magnetic materials like steel. Common variants of permanent magnets include:</p>
  <ul>
    <li>bar</li>
    <li>horseshoe</li>
    <li>refrigerator</li>
  </ul>
  <h3>Electromagnet</h3>
  <p>An electromagnet is a temporary magnet made by passing direct current through a coil surrounding a core. Electromagnets use a soft iron core.</p>
  <p>They are often used as switches for closing circuits.</p>
  <h3>Magnetisation</h3>
  <p>There are 3 ways to magnetise a magnetic material such as:</p>
  <ul>
    <li>stroking in the same direction with a magnet</li>
    <li>passing direct current through a coil</li>
    <li>hammering in a magnetic field</li>
  </ul>
  <h2>Electromagnetic Effects</h2>
  <h3>Magnetic Field Patterns</h3>
  <p>The right-hand grip (thumbs-up) rule is used to determine the rotation of a magnetic field produced by a current flowing through a wire.</p>
  <ul>
    <li>Thumb points in direction of current</li>
    <li>Fingers curl in direction of magnetic field</li>
  </ul>
  <h3>Lorentz Force</h3>
  <p>A force will act on a current-carrying conductor when it is in a magnetic field. Placing a wire carrying current between opposite poles of a magnet will cause a force to act on the wire.</p>
  <p>The direction of this force is relative to the direction of the current and the magnetic field. Fleming's left hand rule or the right hand slap rule can be used to determine the direction of the force.</p>
  <h4>Left Hand Rule</h4>
  <p>The direction of each finger should be in <strong>right</strong> angles to each other, producing a 3D shape.</p>
  <ul>
    <li>thumb: force</li>
    <li>index finger: magnetic field</li>
    <li>middle finger: current</li>
  </ul>
  <Image src={fleming}></Image>
  <h3>DC Motor</h3>
  <p>A current-carrying coil in a magnetic field experiences a turning effect and that the effect is increased by increasing the:</p>
  <ul>
    <li>number of turns in the coil</li>
    <li>current</li>
    <li>strength of the magnetic field</li>
  </ul>
  <p>The turning effect is a result of a Lorentz force acting on both sides of the coil. One side experiences an upward force while the other experiences a downward force due to the current travelling in opposite directions on each side. Fleming's left hand rule can be applied to predict the rotation of the coil.</p>
  <Image src={dc_motor}></Image>
  <h4>Commutator</h4>
  <p>A split-ring commutator <strong>reverses the direction of the current every half turn</strong>. This keeps the current leaving the motor in the same direction and prevents the motor from alternating between clockwise and anti-clockwise motion.</p>
  <Image src={commutators}></Image>
  <h3>AC Generator</h3>
  <p>Generators work through electromagnetic induction.</p>
</section>