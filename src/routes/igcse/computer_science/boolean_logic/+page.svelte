<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import TruthTable from '$lib/components/TruthTable.svelte'

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
  <p>The shapes used in logic gates correlate with their names. A small circle means NOT and can be seen in gates with the letter <em>N</em> in them. A curved line is used for gates with an <em>X</em> which stands for <strong>exclusive</strong> in their name.</p>
  <Callout emoji="🤔">
    A NOT gate is drawn with a triangle (buffer) to prevent confusion between other gates with circles.
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
</section>