<script lang="ts">
  import { end, frac, lambda, math, sin, theta, times } from '$lib/utils/katex'
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
  <div class="katex-display">
    {@html math(`n_i ${times} ${sin} ${theta}_i=n_r ${times} ${sin} ${theta}_r ${end} n_r=${frac(`${sin} ${theta}_i`, `${sin} ${theta}_r`)}`)}
  </div>
  <h4>Total Internal Reflection</h4>
  <h4>Convex Lens</h4>
  <p>A convex lens bulges outwards. It is also known as a <strong>converging lens</strong> because it bends rays towards the principal axis.</p>
</section>