<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import TruthTable from '$lib/components/TruthTable.svelte'
  import Image from '$lib/components/Image.svelte'
  import logic_gates from '$lib/images/diagrams/logic_gates.png'

  function not(a: number) {
    return Number(!a)
  }

  function and(a: number, b: number) {
    return a & b
  }

  function or(a: number, b: number) {
    return a | b
  }

  function xor(a: number, b: number) {
    return a ^ b
  }

  function nand(a: number, b: number) {
    return not(a & b)
  }

  function nor(a: number, b: number) {
    return not(a | b)
  }

  function xnor(a: number, b: number) {
    return not(a ^ b)
  }
</script>

<section>
  <h1>Boolean Logic</h1>
  <h2>Logic Gates</h2>
  <h3>Logic Gate Symbols</h3>
  <p>The shapes used in logic gates correlate with their names. A small circle means <strong>NOT</strong> and can be seen in gates with the letter <em>N</em> in them including the <strong>NOT</strong> gate itself. A curved line is used for gates with an <em>X</em> which stands for exclusive in their name.</p>
  <p>The diagram below shows all gates except the XNOR gate.</p>
  <Image src={logic_gates}></Image>
  <Callout emoji="🤔">
    A NOT gate is drawn with a triangle (buffer) with a circle at the end instead of just a circle for clarity.
  </Callout>
  <h3>Logic Gate Functions</h3>
  <p>All logic gates take 2 inputs and produce 1 output except for a <strong>NOT</strong> gate which only takes 1 input. Each wire connected to a logic gate carries a binary value of 0 (false) or 1 (true).</p>
  <Callout emoji="🤔">
    The outputs of AND, OR, and XOR gates can be attached to a NOT gate to invert their outputs and create NAND, NOR, and XNOR gates. 
  </Callout>
  <h4>NOT</h4>
  <p>A single input is inverted.</p>
  <TruthTable inputs={['A']} output="X" operation={not}></TruthTable>
  <h4>AND</h4>
  <p>Both inputs must be 1 to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={and}></TruthTable>
  <h4>OR</h4>
  <p>At least a single input must be 1 to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={or}></TruthTable>
  <h4>XOR</h4>
  <p>Both inputs must be different to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={xor}></TruthTable>
  <h4>NAND</h4>
  <p>At least a single input must be 0 to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={nand}></TruthTable>
  <h4>NOR</h4>
  <p>Both inputs must be 0 to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={nor}></TruthTable>
  <h4>XNOR</h4>
  <p>Both inputs must be the same to output 1.</p>
  <TruthTable inputs={['A', 'B']} output="X" operation={xnor}></TruthTable>
  <h2>Logic Circuit</h2>
  <p>A logic circuit is a system of logic gates connected to each other. Logic circuits often have 3 or more inputs and 1 output in IGCSE. Logic circuits must be drawn by using the correct symbol for each logic gate. There are some things to keep in mind while drawing thse diagrams.</p>
  <ul>
    <li>Logic expressions should not be simplified to make it easier to draw the logic circuit</li>
    <li>Some inputs may be used multiple times</li>
    <li>A dot must be placed at the intersection of 2 wires if they are connected to each other</li>
    <li>A curve may be used at the intersection of 2 wires to indicate that a wire is simply overlapping and not joining another wire</li>
  </ul>
  <h2>Truth Table</h2>
  <p>A truth table is used to show all the possible outputs of a logic gate or circuit for every possible input. In IGCSE, truth tables usually only involve 3 inputs (8 possible outputs). Converting a logic circuit into a logic expression may make it easier to complete truth tables.</p>
  <h2>Logic Expression</h2>
  <p>A logic expression is similar to a boolean expression in pseudocode. The logic gates are treated as operators and parentheses are used to group these operations. Operations inside the innermost parentheses must be calculated first just like order of operations in mathematics.</p>
  <p>There are some strategies when it comes to converting circuits into expressions.</p>
  <ul>
    <li>The gate closest to the ouput is the last operation (outermost parantheses)</li>
    <li>It is easier to work backwards from the output towards the inputs</li>
  </ul>
</section>