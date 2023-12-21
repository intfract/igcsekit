<script lang="ts">
  import { end, frac, lambda, math, sin, theta, times } from '$lib/utils/katex'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, boolean, boolean][] = []

  let b: [string, string, string, string][] = [
    [math(`d_0 > 2f`), 'Real', 'Inverted', 'Diminished'],
    [math(`d_o = 2f`), 'Real', 'Inverted', 'Equal'],
    [math(`2f > d_o > f`), 'Real', 'Inverted', 'Enlarged'],
    [math(`d_o = f`), '?', '?', 'Infinite'],
    [math(`f > d_o > 0`), 'Virtual', 'Upright', 'Enlarged'],
  ]
</script>

<section>
  <h1>Waves</h1>
  <h2 class="hidden offset">Types of Waves</h2>
  <p class="hidden offset">Waves transfer energy without transferring matter.</p>
  <p class="hidden offset">Waves <strong>oscillate</strong> or <strong>vibrate</strong> about a fixed point.</p>
  <ul class="hidden offset">
    <li>Ripples cause particles of water to oscillate up and down</li>
    <li>Sound waves cause particles of air to vibrate back and forth</li>
  </ul>
  <p class="hidden offset">There are 2 types of waves.</p>
  <ul class="hidden offset">
    <li>
      <strong>Transverse</strong>: oscillation is <strong>perpendicular</strong> to the direction of wave travel 
    </li>
    <li>
      <strong>Longitudinal</strong>: oscillation is <strong>parallel</strong> to the direction of wave travel
    </li>
  </ul>
  <p class="hidden offset">All waves have 4 basic properties.</p>
  <ul class="hidden offset">
    <li>
      <strong>Frequency</strong>: the number of cycles per second measured in <strong>hertz</strong>
    </li>
    <li>
      <strong>Wavelength</strong>: the length of a complete wave measured in <strong>metres</strong>
    </li>
    <li>
      <strong>Velocity</strong>: the speed of the wave measured in <strong>metres per second</strong>
    </li>
    <li>
      <strong>Amplitude</strong>: the maximum displacement from the equilibrium position measured in <strong>metres</strong>
    </li>
  </ul>
  <div class="katex-display">
    {@html math(`f=${frac(`1`, `T`)} ${end} v=f${lambda}`)}
  </div>
  <h2>Light</h2>
  <p>Light is an example of a transverse wave in the electromagnetic spectrum.</p>
  <h3>Reflection</h3>
  <h4>Plane Mirror</h4>
  <p>A plane mirror always produces an image that is:</p>
  <ul>
    <li>virtual</li>
    <li>laterally inverted</li>
    <li>equal</li>
  </ul>
  <p>Plane mirrors are flat. This means there is no distortion or scaling of the image. A virtual image is produced because the rays diverge but appear to converge behind the mirror.</p>
  <h3>Refraction</h3>
  <p>The refractive index is the ratio of the speed of light in a vacuum to the speed of light in another medium.</p>
  <p>Snell's law is used to calculate the refractive index of a medium. Denser mediums will have a refractive index that is <strong>always greater than 1</strong>.</p>
  <div class="katex-display">
    {@html math(`n_i ${times} ${sin} ${theta}_i=n_r ${times} ${sin} ${theta}_r`)}
  </div>
  <p>The incident material is assumed to be a vacuum which means it has a refractive index of 1. Therefore, Snell's law can be simplified.</p>
  <div class="katex-display">
    {@html math(`n_r=${frac(`${sin} ${theta}_i`, `${sin} ${theta}_r`)}`)}
  </div>
  <h4>Total Internal Reflection</h4>
  <p>Total internal reflection requires 2 conditions to happen.</p>
  <ul>
    <li>
      Light must be travelling from a <strong>denser medium</strong>
    </li>
    <li>
      The <strong>angle of incidence</strong> must be greater than the <strong>critical angle</strong>
    </li>
  </ul>
  <p>Refraction will not happen at the <strong>critical angle</strong> of a denser medium because the ray would refract at 90 degrees and stay within the medium.</p>
  <h4>Convex Lens</h4>
  <p>A convex lens bulges outwards. It is also known as a <strong>converging lens</strong> because it bends rays towards the principal axis.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Position</Cell>
        <Cell>Type</Cell>
        <Cell>Orientation</Cell>
        <Cell>Scale</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell,i}
            {#if i}
              <Cell>{cell}</Cell>
            {:else}
              <Cell>{@html cell}</Cell>
            {/if}
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>