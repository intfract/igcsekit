<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  let declaring = 'DECLARE Text : STRING\nCONSTANT DaysPerWeek ← 7'
  let ifStatement = 'Num ← 1\nIF Num > 0 THEN\n\tOUTPUT "Positive"\nELSE\n\tOUTPUT "Not Positive"\nENDIF'
  let caseStatement = 'X ← 0\nY ← 0\nOUTPUT "Make your move!"\nINPUT Move\nCASE OF Move\n\t"w" : Y ← Y + 1\n\t"s" : Y ← Y - 1\n\t"d" : X ← X + 1\n\t"a" : X ← X - 1\n\tOTHERWISE OUTPUT "?"\nENDCASE\nOUTPUT X\nOUTPUT Y'
  let stringHandling = 'OUTPUT LENGTH("penis")\nOUTPUT UCASE("#2c6fef")\nOUTPUT LCASE("X")\nOUTPUT SUBSTRING("sushi", 1, 3)'
  let procedures = 'DECLARE Items : ARRAY\nPROCEDURE Swap\n\tTemp ← Items[Index]\n\tItems[Index] ← Items[Index + 1]\n\tItems[Index + 1] ← Temp\n\tSwapped ← TRUE\nENDPROCEDURE\nN ← 0\nItem ← ""\nREPEAT\n\tOUTPUT "Enter an item or leave blank to begin sorting."\n\tINPUT Item\n\tIF Item <> "" THEN\n\t\tN ← N + 1\n\t\tItems[N] ← Item\n\tENDIF\n\tLength ← N\nUNTIL Item = ""\nSwapped ← TRUE\nWHILE N > 1 AND Swapped DO\n\tSwapped ← FALSE\n\tN ← N - 1\n\tFOR Index ← 1 TO N\n\t\tIF Items[Index] > Items[Index + 1] THEN\n\t\t\tCALL Swap\n\t\tENDIF\n\tNEXT\nENDWHILE\nOUTPUT Length, " items have been sorted!"\nFOR Index ← 1 TO Length\n\tOUTPUT Items[Index]\nNEXT'
  let functions = 'FUNCTION SumUpTo(Value)\n\tRETURN Value / 2 * (Value + 1)\nENDFUNCTION\nOUTPUT SumUpTo(4)'
  let arrays = 'DECLARE TicTacToe : ARRAY[1:3, 1:3] OF CHAR'
  let fileHandling = 'DECLARE LineOfText : STRING\nOPENFILE FileA.txt FOR READ\nOPENFILE FileB.txt FOR WRITE\nREADFILE FileA.txt, LineOfText\nWRITEFILE FileB.txt, LineOfText\nCLOSEFILE FileA.txt\nCLOSEFILE FileB.txt'
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
  <p>Some section of a program may require a decision to be made. These decision are often controlled by booleans. Selection allows parts of a program to be ignored depending on the value of a variable or boolean expression.</p>
  <p>Most selection statements are done using an <code>IF</code> statement which runs a block of code if the <strong>condition is true</strong>.</p>
  <CodeBlock code={ifStatement} runnable></CodeBlock>
  <p>On the other hand, a <code>CASE</code> statement runs a block of code when a <strong>variable is equal to value</strong>. This statement is used when it would take too many <code>IF</code> and <code>ELSE</code> statements to account for multiple cases.</p>
  <CodeBlock code={caseStatement} runnable></CodeBlock>
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
      <ul>
        <li>+ (addition)</li>
        <li>- (subtraction)</li>
        <li>* (multiplication)</li>
        <li>/ (division)</li>
        <li>^ (exponentiation)</li>
      </ul>
    </li>
    <li>
      Logical
      <ul>
        <li>= (equal to)</li>
        <li>&lt;&gt; (not equal to)</li>
        <li>&gt; (greater than)</li>
        <li>&lt; (less than)</li>
        <li>&gt;= (greater than or equal to)</li>
        <li>&lt;= (less than or equal to)</li>
      </ul>
    </li>
    <li>
      Boolean
      <ul>
        <li>AND</li>
        <li>OR</li>
        <li>NOT</li>
      </ul>
    </li>
  </ul>
  <h3>Procedures and Functions</h3>
  <p>A procedure is a block of reusable code that performs a task.</p>
  <CodeBlock code={procedures} runnable></CodeBlock>
  <p>A function is similar to a procedure but it returns a value back to the main program. This makes functions very handy for calculations or recursion.</p>
  <CodeBlock code={functions} runnable></CodeBlock>
  <h3>Library Routines</h3>
  <p>Library routines are pre-written functions in pseudocode that are used to perform common tasks. Programming languages tend to collectively call this a standard library.</p>
  <ul>
    <li>
      <code>MOD</code>
      <ul>
        <li>returns the remainder after a division operation</li>
      </ul>
    </li>
    <li>
      <code>DIV</code>
      <ul>
        <li>returns the floor of a division operation (performs integer division and rounds the result down)</li>
      </ul>
    </li>
    <li>
      <code>ROUND</code>
      <ul>
        <li>rounds a number to the nearest integer</li>
      </ul>
    </li>
    <li>
      <code>RANDOM</code>
      <ul>
        <li>returns a random decimal number between 0 and 1</li>
      </ul>
    </li>
  </ul>
  <h3>Maintainable Program Standards</h3>
  <p>Good programmers create maintainable programs. A maintanable program includes the appropriate use of:</p>
  <ul>
    <li>meaningful identifiers (to allow programmers to easily understand the purpose of a variable)</li>
    <li>the commenting feature provided by the programming language (to help programmers know the purpose of a section of code)</li>
    <li>procedures and functions (to make programs modular and easy to update)</li>
    <li>relevant appropriate commenting of syntax</li>
  </ul>
  <p>A meaningful identifier exlpains the purpose of a variable. For example, a variable used to store a running total should have a name like <code>Total</code> or <code>Sum</code>.</p>
  <Callout emoji="🤔">
    It is usually a good idea to use verbs as identifiers for functions and procedures.
  </Callout>
  <h2>Arrays</h2>
  <p>Arrays are fixed-length structures containing elements with the same data type which are accessible by consecutive index numbers. It is good practice to explicitly state what the lower bound of the array (the index of the first element) because this defaults to either 0 or 1 in different systems. Generally, a lower bound of 1 will be used in pseudocode.</p>
  <CodeBlock code={arrays}></CodeBlock>
  <h2>File Handling</h2>
  <p>Storing data in files permanently allows data to be resued by a program even after it has been closed and reopened. Files also allow data to be transferred between machines.</p>
  <p>The pseudocode below shows the process of writing the text stored in <code>FileA.txt</code> to <code>FileB.txt</code>. This will replace the existing contents of <code>FileB.txt</code> but leave <code>FileA.txt</code> unmodified.</p>
  <CodeBlock code={fileHandling} runnable files={{ 'FileA.txt': 'Deez Nuts!', 'FileB.txt': null }}></CodeBlock>
</section>