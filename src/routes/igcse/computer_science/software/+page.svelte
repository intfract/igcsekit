<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
</script>

<section>
  <h1>Software</h1>
  <h2>Computer Software</h2>
  <p>System software is <strong>essential</strong> and includes the <strong>operating system</strong> and <strong>utility software</strong>. It is installed directly on the computer and manages the hardware. On the other hand, application software is optional and installed on top of system software to allow the user to perform specific tasks using the computer.</p>
  <p>In short, system software provides what the <strong>computer</strong> requires while application software provides what the <strong>user</strong> requires.</p>
  <h3>Operating System</h3>
  <p>The operating system is booted after the BIOS has loaded successfully. An operating system is a program designed to manage hardware and software resources. It performs a variety of tasks:</p>
  <ul>
    <li>
      <strong>Memory Allocation</strong>
    </li>
    <li>
      <strong>Peripheral Management</strong>
    </li>
    <li>
      <strong>Interrupt Handling</strong>
    </li>
  </ul>
  <Callout emoji="🤔">
    There are many operating systems like Windows, Linux, and macOS!
  </Callout>
  <h3>Utility Software</h3>
  <p>Utilility programs perform specific tasks related to computer functions, resources, files, and security. They help to configure the system and optimise performance. Some examples include:</p>
  <ul>
    <li>Security Software</li>
    <li>Disk Allocation</li>
  </ul>
  <h3>Application Software</h3>
  <p>Application software provides services that are required for users to interact with the computer. Some examples include:</p>
  <ul>
    <li>web browsers</li>
    <li>word processors</li>
    <li>spreadsheet programs</li>
    <li>video games</li>
  </ul>
  <h3>Interrupts</h3>
  <p>Interrupts allow computers to multitask. When an interrupt is generated, the CPU stops processing the current task and services the interrupt. There are 2 types of interrupts:</p>
  <ul>
    <li>
      <strong>Hardware Interrupts</strong>
      <ul>
        <li>Keyboard Keystroke</li>
        <li>Mouse Movement</li>
      </ul>
    </li>
    <li>
      <strong>Software Interrupts</strong>
      <ul>
        <li>Unresponsive Program</li>
        <li>Division by Zero</li>
      </ul>
    </li>
  </ul>
  <h4>Interrupt Service Routine</h4>
  <p>Interrupts are handled by the <strong>operating system</strong>. It contains the <strong>interrupt handler</strong>.</p>
  <ol>
    <li>Interrupt is generated</li>
    <li>Operating system assigns interrupt a priority</li>
    <li>Interrupt is added to queue</li>
    <li>Interrupt stops CPU from processing current instruction</li>
    <li>Interrupt handler services the interrupt</li>
    <li>CPU executes interrupt and continues processing other interrupts or instructions</li>
  </ol>
  <h2>Programming Languages</h2>
  <h3>High-Level</h3>
  <p>A high-level language uses natural language as syntax and is designed to make writing code easier for programmers. Examples of high level langauges include:</p>
  <ul>
    <li>Python</li>
    <li>Java</li>
    <li>JavaScript</li>
    <li>Visual Basic</li>
  </ul>
  <p>High-level languages are:</p>
  <ul>
    <li>easier to understand</li>
    <li>easier to debug</li>
    <li>portable</li>
  </ul>
  <p>These advantages allow programmers to focus on the problem instead of managing memory and harware.</p>
  <Callout emoji="🤔">
    Easy debuggig allows programmers to fix errors quickly and avoid mistakes. Portable means the program can run on any computer and there is no need to understand hardware.
  </Callout>
  <h3>Low-Level</h3>
  <p>A low-level language communicates with the computer hardware directly and is harder to understand. Assembly and machine code are examples of low-level languages.</p>
  <h4>Assembly</h4>
  <p>Assembly code uses mnemonics such as <code>LDA</code> and <code>ADD</code> to represent binary instructions.</p>
  <h4>Machine Code</h4>
  <p>Machine code is a list of instructions written in <strong>binary</strong>. Computers can only understand binary. This means that every programming language has to eventually be converted into machine code.</p>
  <h2>Translators</h2>
  <p>A translator converts source code written in a high-level or low-level language into machine code.</p>
  <p>There are 3 types of translators:</p>
  <ul>
    <li>assemblers</li>
    <li>compilers</li>
    <li>interpreters</li>
  </ul>
  <h3>Assembler</h3>
  <p>An assembler translates low-level assembly code into machine code.</p>
  <h3>Compiler</h3>
  <p>A compiler translates a whole source code file into machine code in one go. It also:</p>
  <ul>
    <li>checks for errors <strong>before</strong> running the program</li>
    <li>generates a report of <strong>all the errors</strong> found in the program</li>
    <li>produces an executable file</li>
  </ul>
  <Callout emoji="🤔">
    A transpiler translates a high-level language to another high-level language in a similar fashion to a compiler.
  </Callout>
  <h3>Interpreter</h3>
  <p>An interpreter translates source code one line after the other. It also:</p>
  <ul>
    <li>translates one line of source code into machine code and runs it <strong>before</strong> moving on to the next line</li>
    <li>stops when it encounters an error</li>
    <li>allows errors to be fixed in real-time</li>
  </ul>
  <h2>Integrated Development Environment</h2>
  <p>An IDE provides tools that make it easier for programmers to write code.</p>
  <h3>Tools</h3>
  <p>IDEs contain a lot of built-in tools. The functions of an IDE include:</p>
  <ul>
    <li>code editor</li>
    <li>auto-completion</li>
    <li>auto-correction</li>
    <li>prettyprint</li>
    <li>built-in interpreter</li>
    <li>built-in compiler</li>
    <li>run-time environment</li>
  </ul>
  <p>It may be useful to think of an IDE as having 2 layers.</p>
  <ol>
    <li>
      <strong>Code Editor</strong>: automatically completes or corrects code as it is typed and uses prettyprint to display source code in an attractive way
    </li>
    <li>
      <strong>Integrated Development Environment</strong>: adds interpreters to be used during development, compilers for producing a final executable, and a run-time environment to run the program
    </li>
  </ol>
  <p>For example, Visual Studio Code is a code editor while Visual Studio is an IDE. This is because Visual Studio targets the <a href="https://dotnet.microsoft.com/en-us/" target="_blank">.NET framework</a> made by microsoft. It has an embedded compiler for C# and Visual Basic. Visual Studio Code on the other hand, requires you to install most resources.</p>
</section>