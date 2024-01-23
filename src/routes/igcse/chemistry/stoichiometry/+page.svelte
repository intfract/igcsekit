<script lang="ts">
  import { math, times, div } from '$lib/utils/katex'
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
  <p>The units for relative atomic mass is grams per mole.</p>
  <div class="katex-display">
    {@html math(`m=M_r${times}n`)}
  </div>
</section>