<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string, string][] = [
    ['Current Instruction Register', 'CIR', 'Stores the current instruction being decoded and executed'],
    ['Arithmetic Logic Unit', 'ALU', 'Performs calculations inside the CPU'],
    ['Accumulator', 'ACC', 'Stores data temporarily for ALU calculations'],
    ['Memory Address Register', 'MAR', 'Stores the address of the data that needs to be fetched'],
    ['Memory Data Register', 'MDR', 'Stores data that has been fetched from memory'],
    ['Program Counter', 'PC', 'Stores the address for the next instruction'],
  ]

  let b: [string, string, boolean][] = [
    ['Data Bus', 'Transmits data from the CPU to memory or IO controllers', true],
    ['Address Bus', 'Transfers addresses from the CPU to memory', false],
    ['Control Bus', 'Transfers control signals from the CU to other components like IO controllers', true],
  ]
</script>

<section>
  <h1>Hardware</h1>
  <h2>Computer Architecture</h2>
  <h3>CPU</h3>
  <p>The <strong>central processing unit</strong> processes instructions and data that are inputted into the computer to produce an output.</p>
  <h3>Microprocessor</h3>
  <p>A microprocessor is a type of integrated circuit on a single chip.</p>
  <h3>Von Neumann Architecture</h3>
  <p>Von Neumann architecture is the concept used to build nearly all computers.</p>
  <ul>
    <li><strong>Data and instructions</strong> are stored in the <strong>same memory</strong> (RAM) as binary</li>
    <li>CPU fetches instructions from memory and executes them <strong>serially</strong> (one at a time)</li>
    <li>CPU stores results in memory</li>
  </ul>
  <p>The CPU contains many units and registers.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Component</Cell>
        <Cell>Abbreviation</Cell>
        <Cell>Function</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <p>Components within the CPU and wider computer system are connected by buses. Electronic signals and data travel down these wires. Collectively, these buses are called the <strong>system bus</strong>.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Bus</Cell>
        <Cell>Function</Cell>
        <Cell>Bidirectional</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 2}
                <span class="material-symbols-rounded" style="text-align: center; width: 100%;">{cell ? 'check' : 'close'}</span>
              {:else}
                {cell}
              {/if}
            </Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>  
  <h3>CPU Cycle</h3>
  <p>CPUs perform the <strong>fetch-decode-execute</strong> cycle to process data.</p>
  <ol>
    <li>Memory is <strong>fetched</strong> from <strong>RAM</strong> into CPU</li>
    <li>CPU reads instructions and data from <strong>MDR</strong></li>
    <li><strong>CIR</strong> stores current instruction</li>
    <li><strong>CU</strong> decodes instruction</li>
    <li><strong>ALU</strong> executes instruction</li>
    <li>Data is written to RAM</li>
  </ol>
  <h3>CPU Performance</h3>
  <p>CPUs can have multuple cores. Each core runs separate fetch-decode-execute cycles <strong>independently</strong>.</p>
  <ul>
    <li>Multiple cores allows <strong>multitasking</strong> due to <strong>parallel processing</strong></li>
    <li>More cores means more instructions can be executed per second</li>
  </ul>
  <p>Each core has a clock speed.</p>
  <ul>
    <li>Clock speed is how many instructions the core can execute each second measured in Hertz</li>
    <li>Greater clock speed improves CPU performance</li>
    <li>Overclocking is the act of increasing the clock speed beyond the recommended speed which may damage components</li>
  </ul>
  <p><strong>Cache</strong> is a small amount of memory situated within or close to the CPU with very <strong>fast read and write speeds</strong>.</p>
  <ul>
    <li>Used for storing frequently used instructions and data or instructions that need to be executed next</li>
    <li>Increasing cache size increases CPU performance because more data can be stored in cache and fetched quicker</li>
  </ul>
  <h3>Instruction Sets</h3>
  <p>An instruction set is a list of all the commands that can be processed by a CPU. Each command has a <strong>unique binary code</strong>.</p>
  <h3>Embedded Systems</h3>
  <p>An embedded system is a computer system used to perform a dedicated function. This is different to a general purpose computer like a personal computer. Here are some examples of embedded systems:</p>
  <ul>
    <li>lighting systems</li>
    <li>vending machines</li>
    <li>security systems</li>
  </ul>
  <p>Embedded systems run on firmware and do not have any additional peripheral devices. Some of these are <strong>microcontrollers</strong> which are integrated circuits with built in memory.</p>
  <h2>Input and Output Devices</h2>
  <h3>Input Devices</h3>
  <p>Computers use input devices to receive data or instructions from the real world. Input devices convert real world inputs into digital data that can be processed.</p>
  <ul>
    <li>
      Barcode Scanner
      <ul>
        <li>Barcodes are a series of black and white bars which represent a code</li>
        <li>A barcode reader shines a <strong>red laser</strong> at the barcode to read the data it represents</li>
        <li>The light from the white lines is reflected back</li>
        <li>Black lines absorb the light so less is reflected</li>
        <li>The different levels of reflection are <strong>converted into a binary value</strong> which can be processed by a microprocessor</li>
        <li>Barcodes can be used in many ways such as identifying a product being sold or tracking a package through the delivery process</li>
      </ul>
    </li>
  </ul>
  <h3>Output Devices</h3>
  <p>Output devices are used to display or emit processed data usually in the form light and sound.</p>
  <h3>Sensors</h3>
</section>