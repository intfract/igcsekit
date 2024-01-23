<script lang="ts">
  import { math } from '$lib/utils/katex'
  import Image from '$lib/components/Image.svelte'
  import lead_bromide_electrolysis from '$lib/images/diagrams/lead_bromide_electrolysis.png'
  import Callout from '$lib/components/Callout.svelte'
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
  <Callout emoji="🤔">
    It is important to use the word <em>inert</em> with <em>electrode</em> when describing an experiment involving electrolysis.
  </Callout>
  <h3>Electrode Rules</h3>
  <p>Only one type of ion can be discharged at each electrode.</p>
  <ul>
    <li>
      The least reactive cation will be discharged at the cathode unless it is really unreactive like platinum and graphite
      <ul>
        <li>Copper</li>
        <li>Hydrogen</li>
        <li>Iron</li>
        <li>Zinc</li>
        <li>Carbon</li>
        <li>Aluminium</li>
        <li><strong>Group 2</strong></li>
        <li><strong>Group 1</strong></li>
      </ul>
    </li>
    <li>
      The anion discharged at the anode depends on the concentration of an aqueous solution
      <ul>
        <li>The halide ions will always get discharged in a concentrated solution</li>
        <li>The hydroxide ions will sometimes get discharged in a dilute solution</li>
        <li>The sulphate and nitrate ions will never get discharged</li>
      </ul>
    </li>
  </ul>
  <h3>Ionic Half Equations</h3>
  <p>Half equations are used to represent the reactions that take place at each electrode. Half equations only involve ions and electrons. Electrons are represented by {@html math(`e^{-}`)} in half equations due to their negative charge.</p>
  <div class="equation">
    Al<sup>3+</sup> + 3e<sup>-</sup> → Al
  </div>
  <h2>Examples</h2>
  <h3>Molten Lead Bromide</h3>
  <p>The electrolysis of molten lead(II) bromide is a classic example. Lead(II) bromide is an ionic compound made up of 1 lead ion and 2 bromide ions.</p>
  <Image src={lead_bromide_electrolysis}></Image>
  <p>The product at the anode is bromine gas while the product at the cathode is lead.</p>
  <p>Lead is reduced at the negatively charged cathode.</p>
  <div class="equation">
    Pb<sup>2+</sup> + 2e<sup>-</sup> → Pb
  </div>
  <p>Bromide ions are oxidised at the positively charged anode.</p>
  <div class="equation">
    2Br<sup>-</sup> - 2e<sup>-</sup> → Br<sub>2</sub>
  </div>
  <h3>Concentrated Aqueous Sodium Chloride</h3>
  <p>The electrolysis of aqueous solutions is more complex because water is involved. Water has hydrogen ions and hydroxide ions. The cathode has to choose between hydrogen ions and sodium ions while the anode has to choose between hydroxide ions and chloride ions.</p>
  <p>Hydrogen ions are reduced at the cathode and form hydrogen gas.</p>
  <div class="equation">
    2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub>
  </div>
  <p>Chloride ions are oxidised at the anode and form chlorine gas.</p>
  <div class="equation">
    2Cl<sup>-</sup> - 2e<sup>-</sup> → Cl<sub>2</sub>
  </div>
  <h3>Dilute Sulphuric Acid</h3>
  <p>Bubbles of gas can be observed at both electrodes when dilute sulphuric acid is electrolysed.</p>
  <p>Hydrogen ions are reduced at the cathode and form hydrogen gas.</p>
  <div class="equation">
    2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub>
  </div>
  <p>Hydroxide ions are oxidised at the anode to form oxygen gas and water.</p>
  <div class="equation">
    4OH<sup>-</sup> - 4e<sup>-</sup> → 2H<sub>2</sub>O + O<sub>2</sub>
  </div>
  <h2>Electropating</h2>
  <p>Electroplating with copper can be done through the electrolysis of copper(II) sulphate using custom anodes and cathodes.</p>
  <ul>
    <li>Object to be electroplated should be the cathode</li>
    <li>Copper should be the anode</li>
  </ul>
  <Callout emoji="🤔">
    When electroplating with a different metal, the anode can be any pure metal such as zinc. Zinc is used to galvanise steel and protect it from corrosion.
  </Callout>
  <p>Copper atoms at the anode lose electrons to form copper cations in solution. These cations are attracted to the cathode and discharged. This deposits a layer of copper on the object.</p>
  <h3>Carbon Electrodes</h3>
  <p>If <strong>inert</strong> electrodes are used in the electrolysis of copper(II) sulphate, then copper is still deposited at the cathode because it is less reactive than hydrogen. However, oxygen gas is produced at the anode and the copper(II) sulphate solution reacts with hydrogen to form sulphuric acid.</p>
  <h2>Chemical Manufacturing</h2>
  <h3>Aluminium Oxide</h3>
  <p>Aluminium is extracted by the electrolysis of pure aluminium oxide mixed with molten cryolite. Cryolite <strong>reduces the melting point</strong> of aluminium oxide.</p>
  <p>Aluminium is formed at the cathode while oxygen gas is formed at the anode.</p>
  <h3>Concentrated Aqueous Sodium Chloride</h3>
  <p>Chlorine, hydrogen, and sodium hydroxide are produced in the electrolysis of aqueous sodium chloride. Sodium hydroxide is produced as a result of free sodium ions reacting with free hydroxide ions.</p>
  <Callout emoji="🤔">
    An important detail is that <strong>sodium hydroxide collects around the cathode</strong> during electrolysis. This has appeared as a rare multiple choice question.
  </Callout>
</section>