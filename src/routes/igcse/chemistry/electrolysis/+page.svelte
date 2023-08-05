<script lang="ts">
  import katex from 'katex'
  import { wrap, times, div, frac } from '$lib/utils/katex'
</script>

<section>
  <h1>Electrolysis</h1>
  <h2>General Principles</h2>
  <p>Electrolysis is the breakdown of an <strong>ionic compound</strong> by passing electricity through it.</p>
  <p>There are certain conditions for electrolysis to work properly.</p>
  <ul>
    <li>Covalent compounds are poor conductors of electricity and are not suitable for electrolysis</li>
    <li>
      Ions need to be mobile
      <ul>
        <li>Ionic compounds in a solid state are poor conductors of electricity because their ions are trapped in a lattice structure</li>
        <li><strong>Molten</strong> ionic compounds split when <strong>direct current</strong> is passed.</li>
        <li><strong>Aqueous</strong> solutions of ionic compounds can conduct electricity</li>
      </ul>
    </li>
  </ul>
  <p>There are 6 main ideas involved in electrolysis.</p>
  <ul>
    <li>
      <strong>Anion</strong>: a negatively charged ion that is a nonmetal
    </li>
    <li>
      <strong>Cation</strong>: a positively charged ion that is usually a metal (hydrogen is the exception)
    </li>
    <li>
      <strong>Electrode</strong>: a rod made out of an <strong>inert</strong> (unreactive) material such as graphite (carbon) or platinum that is connected to a DC power supply
      <ul>
        <li><strong>Anode</strong>: the positively charged electrode that attracts negatively charged <strong>anions</strong></li>
        <li><strong>Cathode</strong>: the negatively charged electrode that attracts positively charged <strong>cations</strong></li>
      </ul>
    </li>
    <li>
      <strong>Electrolyte</strong>: the molten ionic compound or aqueous solution that is being electrolysed
    </li>
    <li>
      <strong>Redox Reactions</strong>: the exchange of electrons that occur at each electrode
      <ul>
        <li><strong>Reduction</strong>: is the gain of electrons and happens at the cathode</li>
        <li><strong>Oxidation</strong>: is the loss of electrons and happens at the anode</li>
      </ul>
    </li>
  </ul>
  <h3>Ionic Half Equations</h3>
  <div class="katex-display">
    {@html katex.renderToString(`Al^{3+} + 3e^{-} → Al`, { displayMode: true })}
  </div>
  <h2>Examples</h2>
  <h3>Molten Lead Bromide</h3>
  <h3>Concentrated Aqueous Sodium Chloride</h3>
  <h3>Dilute Sulphuric Acid</h3>
</section>