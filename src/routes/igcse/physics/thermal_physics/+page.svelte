<script lang="ts">
  import { end, frac, lambda, math } from '$lib/utils/katex'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string, string][] = [
    ['Solid', 'Strong', 'Small', 'Vibrate about a fixed point'],
    ['Liquid', 'Weak', 'Medium', 'Move slowly and around other particles'],
    ['Gas', 'None', 'Large', 'Move quickly and collide with other particles'],
  ]

  let b: [string, string, string][] = [
    ['Boiling', 'Throughout', 'Specific'],
    ['Evaporation', 'Surface', 'Any'],
  ]
</script>

<section>
  <h1>Thermal Physics</h1>
  <h2>The Kinetic Molecular Model</h2>
  <p>The simple kinetic molecular model of matter is used to describe the thermodynamic interactions betweens solids, liquids, and gases.</p>
  <h3>States of Matter</h3>
  <p>There are 3 states of matter (excluding plasma) with distinct properties. These states of matter can be distinguished by the forces, distances, and motion of the molecules.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>State</Cell>
        <Cell>Forces</Cell>
        <Cell>Distances</Cell>
        <Cell>Motion</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h3>Changing State of Matter</h3>
  <p>Melting, boiling and sublimation absorb thermal energy from the environment while freezing, condensation, and deposition release thermal energy into the environment. The <strong>temperature does not change</strong> during melting and boiling because the energy is being used to break the bonds between the particles.</p>
  <ul>
    <li>Melting: Solid to Liquid</li>
    <li>Freezing: Liquid to Solid</li>
  </ul>
  <ul>
    <li>Boiling: Liquid to Gas</li>
    <li>Condensation: Gas to Liquid</li>
  </ul>
  <ul>
    <li>Sublimation: Solid to Gas</li>
    <li>Deposition: Gas to Liquid</li>
  </ul>
  <h3>Evaporation</h3>
  <p>During evaporation, the most energetic molecules leave the surface of the liquid. This results in the cooling of the liquid because the <strong>average kinetic energy</strong> of the remaining particles decreases.</p>
  <p>The rate of evaporation can be increased by:</p>
  <ul>
    <li>temperature</li>
    <li>surface area</li>
    <li>wind speed</li>
  </ul>
  <h4>Evaporation and Boiling</h4>
  <p>Boiling occurs throughout a liquid while evaporation occurs on the surface of a liquid. Unlike evaporation, boiling can only take place when the temperature reaches the boiling point or range of the substance.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Process</Cell>
        <Cell>Distribution</Cell>
        <Cell>Temperature</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h4>Sweating</h4>
  <p>Sweating cools down the body due to evaporation.</p>
  <ol>
    <li>Water in sweat evaporates</li>
    <li>Most energetic particles leave the surface of the skin</li>
    <li>The average kinetic energy of the remaining particles is reduced</li>
  </ol>
</section>