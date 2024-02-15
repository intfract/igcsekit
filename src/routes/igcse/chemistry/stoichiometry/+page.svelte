<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import { math, times, div, textrm, frac, sum, end } from '$lib/utils/katex'
</script>

<section>
  <h1>Stoichiometry</h1>
  <h2>Chemical Formulas</h2>
  <p>Chemical formulas show the number of each type of atom present in a molecule.</p>
  <ul>
    <li>
      <strong>H<sub>2</sub>O</strong>: 2 hydrogen atoms are bonded to 1 oxygen atom
    </li>
    <li>
      <strong>CO<sub>3</sub><sup>2-</sup></strong>: 3 oxygen atoms are bonded to 1 carbon atom producing a compound with a charge of -2
    </li>
    <li>
      <strong>Al<sub>2</sub>O<sub>3</sub></strong>: an ionic compound with 2 aluminium atoms for every 3 oxygen atoms
    </li>
  </ul>
  <h3>Ionic Formulas</h3>
  <p>The ratio of atoms in an ionic compound depends on the valency of the atoms. Ions with different charges will not have a 1 to 1 ratio.</p>
  <div class="equation">
    Al<sub>2</sub>O<sub>3</sub>
  </div>
  <p>Aluminium ions have a charge of 3 while oxygen atoms have a charge of -2. The overall charge of an ionic compound must be equal to 0 (neutral).</p>
  <p>Aluminium ions have a charge of 3 while oxygen atoms have a charge of -2. The overall charge of an ionic compound must be equal to 0 (neutral).</p>
  <ol>
    <li>
      Find the lowest common multiple for the charges {@html math(`|3${times}-2|=6`)}
    </li>
    <li>
      Divide the multiple by the positive charge to get the number of metallic atoms {@html math(`|6${div}3|=2`)}
    </li>
    <li>
      Divide the multiple by the negative charge to get the number of nonmetallic atoms {@html math(`|6${div}-2|=3`)}
    </li>
    <li>
      Confirm that the sum of the metal and nonmetal charges are nullified {@html math(`3${times}2+-2${times}3=0`)}
    </li>
  </ol>
  <h2>The Mole</h2>
  <p>1 mole of a substance contains <strong>6.02 &times; 10<sup>23</sup></strong> (Avogadro's Constant) molecules. 1 mole of a molecule equals the molecule's <strong>relative atomic mass</strong> in grams.</p>
  <ul>
    <li>1 mole of <sup>12</sup>C = 12 grams of <sup>12</sup>C</li>
    <li>1 mole of <sup>1</sup>H = 1 gram of <sup>1</sup>H</li>
    <li>1 mole of <sup>A</sup>X = A grams of <sup>A</sup>X (hypothetical example)</li>
  </ul>
  <p>The relative molecular mass is the sum of the relative atomic masses.</p>
  <div class="katex-display">
    {@html math(`M_r=${sum('A_r', '', '')}`)}
  </div>
  <p>The units for relative molecular mass is grams per mole.</p>
  <div class="katex-display">
    {@html math(`m=M_r${times} n`)}
  </div>
  <p>The mass (g) is equal to the relative atomic mass (g mol<sup>-1</sup>) times the number of moles (mol).</p>
  <Callout emoji="🤔">
    The relative atomic mass of an atom can be approximated by doubling its atomic number. However, it is better to consult the periodic table before making any assumptions.
  </Callout>
  <h3>Molar Ratios</h3>
  <p>Balanced chemical equations have molar ratios. These ratios show how many reactant molecules are required per product molecule.</p>
  <Callout emoji="🤔">
    The law of conservation of mass states that the <strong>mass of reactants = mass of products</strong> in any chemical reaction.
  </Callout>
  <p>Finding the number of moles of 1 substance is enough to find the number of moles of other substances. This can be calculated from mass, volumes, and concentrations.</p>
  <Callout emoji="🤔">
    Please note that {@html math('X_0')} and {@html math('X_1')} will be used to represent hypothetical molecules.
  </Callout>
  <p>The function {@html math('n')} represents the total number of moles of an element while the function {@html math('N')} represents the molar ratio found in a chemcial equation. The ratio of moles is equal to the molar ratio in a chemical equation.</p>
  <div class="katex-display">
    {@html math(`${frac('n(X_0)', 'n(X_1)')}=${frac('N(X_0)', 'N(X_1)')}`)}
  </div>
  <p>For example, the reaction of magnesium with hydrochloric acid requires 2 hydrogen chloride molecules per magnesium atom.</p>
  <div class="equation">
    Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>
  </div>
  <p>This means multiplying the number of moles of chlorine by a half will return the number of moles of magnesium required to complete the reaction.</p>
  <div class="katex-display">
    {@html math(`${frac('n(Mg)', 'n(Cl_2)')}=${frac('N(Mg)', 'N(Cl_2)')}${end}${frac('n(Mg)', 'n(Cl_2)')}=${frac('1', '2')}${end}n(Mg)=n(Cl_2)${times}${frac('1', '2')}`)}
  </div>
  <p>Some questions require calculations involving masses only. The best way to approach these questions is to convert the mass into moles or use the mass ratio formula.</p>
  <div class="katex-display">
    {@html math(`n(X_0)=n(X_1)${times}${frac('N(X_0)', 'N(X_1)')}${end}m(X_0)=M_r(X_0)${times} n(X_0)`)}
  </div>
  <p>The mass ratio is equal to the molecular mass ratio times the molar ratio.</p>
  <div class="katex-display">
    {@html math(`${frac('m(X_0)', 'm(X_1)')}=${frac('M_r(X_0)', 'M_r(X_1)')}${times}${frac('N(X_0)', 'N(X_1)')}`)}
  </div>
  <p>5 parameters are required to solve molar ratio and mass questions.</p>
  <ul>
    <li>
      <strong>2 Relative Atomic Masses</strong>: found in the periodic table
    </li>
    <li>
      <strong>2 Molecular Coefficients</strong>: given in the <em>balanced</em> equation beside the molecular formulas
    </li>
    <li>
      <strong>1 Known Mass</strong>: given in the question
    </li>
  </ul>
  <p>It takes 2 carbon monoxide molecules and 1 oxygen molecule to produce 2 carbon dioxide molecules.</p>
  <div class="equation">
    2CO + O<sub>2</sub> → 2CO<sub>2</sub>
  </div>
  <p>How many grams of oxygen is required to produce 88 grams of carbon dioxide?</p>
  <ol>
    <li>Calculate the relative molecular mass of the known chemical in grams per mole as {@html math(`44 ${textrm(' g mol')}^{-1}`)}</li>
    <li>Divide the known mass by the relative molecular mass to get the number of moles of CO<sub>2</sub> as {@html math(`2 ${textrm(' mol')}`)}</li>
    <li>Multiply the number of moles by the number of O<sub>2</sub> molecules per CO<sub>2</sub> molecules to get the number of moles of O<sub>2</sub> as {@html math(`1 ${textrm(' mol')}`)}</li>
    <li>Multiply by the relative molecular mass of the unknown chemical by the number of moles to get the mass as {@html math(`32 ${textrm(' g')}`)}</li>
  </ol>
  <div class="katex-display">
    {@html math(`M_r(CO_2)=44${textrm(' g mol')}^{-1}${end}${frac(`88${textrm(' g')}`, `44${textrm(' g mol')}^{-1}`)}=2${textrm(' mol')}${end}2${textrm(' mol')}${times}${frac('1', '2')}=1${textrm(' mol')}${end}M_r(O_2)=32${textrm(' g mol')}^{-1}${end}m(O_2)=32${textrm(' g mol')}^{-1}${times} 1${textrm(' mol')}`)}
  </div>
  <h3>Molar Volume</h3>
  <p>The volume of 1 mole of any gas is 24 dm<sup>3</sup> at room temperature and pressure.</p>
  <Callout emoji="🤔">
    The molar volume of any gas at (r.t.p.) is usually given in the exam along with a periodic table. The unit for this constant is decimetres cubed per mole.
  </Callout>
  <h3>Concentration</h3>
  <p>The concentration of a solution is measured in moles per decimetre cubed.</p>
  <div class="katex-display">
    {@html math(`c=${frac('n', 'V')}`)}
  </div>
  <p>Concentration is directly proportional to the number of moles but inversely proportional to the volume of the solution.</p>
</section>