<script lang="ts">
  import { end, frac, lambda, math } from '$lib/utils/katex'
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
      <strong>Transverse</strong>: energy transfer is perpendicular to the direction of wave travel 
    </li>
    <li>
      <strong>Longitudinal</strong>: energy transfer is parallel to the direction of wave travel
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
</section>