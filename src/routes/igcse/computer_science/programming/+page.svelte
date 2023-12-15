<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  let declaring: string = 'DECLARE Text : STRING\nCONSTANT DaysPerWeek ← 7'
  let stringHandling: string = 'OUTPUT LENGTH("penis")\nOUTPUT UPPER("#2c6fef")\nOUTPUT LOWER("X")\nOUTPUT SUBSTRING("sushi", 1, 3)'
</script>

<section>
  <h1>Programming</h1>
  <h2>Concepts</h2>
  <h3>Declaring</h3>
  <p>Variables and constants can be declared with a certain <strong>data type</strong> before they are assigned a value. This makes it easier to understand the purpose of a program and identify errors.</p>
  <CodeBlock code={declaring}></CodeBlock>
  <h3>Data Types</h3>
  <p>There are 5 basic data types when using pseudocode.</p>
  <ul>
    <li>boolean</li>
    <li>integer</li>
    <li>real</li>
    <li>char</li>
    <li>string</li>
  </ul>
  <h3>Common Techniques</h3>
  <h4>Selection</h4>
  <p>Some section of a program may require a decision to be made. These decision are often controlled by booleans. Selection allows parts of a program to be ignored depending on the value of a variable.</p>
  <p>Most selection statements are done using an <code>IF</code> statement which runs a block of code if the <strong>condition is true</strong>.</p>
  <p>On the other hand, a <code>CASE</code> statement runs a block of code when a <strong>variable is equal to value</strong>.</p>
  <h4>Iteration</h4>
  <p>Repeating a process is called iteration. In programming, loops are used to perform tasks repeatedly. There are 3 types of loops.</p>
  <ul>
    <li>count-controlled <code>FOR</code> loops</li>
    <li>pre-condition <code>WHILE</code> loops</li>
    <li>post-condition <code>REPEAT UNTIL</code> loops</li>
  </ul>
  <Callout emoji="🤔">
    Pre-condition loops can replace all other loops as well as selection statements.
  </Callout>
  <h4>String Handling</h4>
  <p>Strings are an important aspect of programming. They are similar to an array of characters (char array).</p>
  <ul>
    <li>length</li>
    <li>substring</li>
    <li>upper</li>
    <li>lower</li>
  </ul>
  <CodeBlock code={stringHandling} runnable></CodeBlock>
  <Callout emoji="⚠">
    The first character of a string can be at position 0 or 1 when using pseudocode. However, the first character is always at position 0 when using program code.
  </Callout>
  <h3>Operations</h3>
  <p>There are 3 types of operations:</p>
  <ul>
    <li>
      Arithmetic
    </li>
    <li>
      Logical
    </li>
    <li>
      Boolean
    </li>
  </ul>
</section>