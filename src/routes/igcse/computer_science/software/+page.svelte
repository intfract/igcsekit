<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
</script>

<section>
  <h1>Software</h1>
  <h2>Computer Software</h2>
  <p>System software is <strong>essential</strong> and includes the <strong>operating system</strong> and <strong>utility software</strong>. It is installed directly on the computer and manages the hardware. On the other hand, application software is optional and installed on top of system software to allow the user to perform specific tasks using the computer.</p>
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
  <h3>Utility Software</h3>
  <p>Utilility programs perform specific tasks related to computer functions, resources, files, and security. They help to configure the system and optimise performance. Some examples include:</p>
  <ul>
    <li>Security Software</li>
    <li>Disk Allocation</li>
  </ul>
  <h3>Application Software</h3>
  <h3>Interrupts</h3>
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
    <li>Assemblers</li>
    <li>Compilers</li>
    <li>Interpreters</li>
  </ul>
  <h3>Assemblers</h3>
  <p>An assembler translates low-level assembly code into machine code.</p>
  <h3>Compilers</h3>
  <p>A compiler translates a whole source code file into machine code in one go. It also:</p>
  <ul>
    <li>checks for errors <strong>before</strong> running the program</li>
    <li>generates a report of <strong>all the errors</strong> found in the program</li>
    <li>produces an executable file</li>
  </ul>
  <h3>Interpreters</h3>
  <p>An interpreter translates source code one line after the other. It also:</p>
  <ul>
    <li>translates one line of source code into machine code and runs it <strong>before</strong> moving on to the next line</li>
    <li>stops when it encounters an error</li>
    <li>allows errors to be fixed in real-time</li>
  </ul>
</section>