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

  let c: [string, boolean, string][] = [
    ['RAM', true, 'Read & Write'],
    ['ROM', false, 'Read'],
  ]

  let d: [string, number, string, string][] = [
    ['IPv4', 32, '4 groups of denary digits separated by a full stop', '2<sup>32</sup> possible addresses'],
    ['IPv6', 128, '8 groups of 4 hexadecimal digits separated by a colon', '2<sup>128</sup> possible addresses'],
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
  <h4>Registers</h4>
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
  <h4>Buses</h4>
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
  <h4>Barcode Scanner</h4>
  <ul>
    <li>Barcodes are a series of black and white bars which represent a code</li>
    <li>A barcode reader shines a <strong>red laser</strong> at the barcode to read the data it represents</li>
    <li>The light from the white lines is reflected back</li>
    <li>Black lines reflect less light than the white lines</li>
    <li>The different levels of reflection are <strong>converted into a binary value</strong> (by photoelectric cells) which can be processed by a microprocessor</li>
    <li>Barcodes can be used in many ways such as identifying a product being sold in a supermarket or tracking a package through the delivery process</li>
  </ul>
  <h4>QR Code Scanner</h4>
  <ul>
    <li>QR codes are made of many black and white squares which represent a code</li>
    <li>A QR code can hold over 7000 digits while a barcode can only store up to 30 digits</li>
    <li>A QR code scanner shines a <strong>red laser</strong> onto the QR code to read its data</li>
    <li>The corner squares are used for alignment and orientation</li>
    <li>The light from the white squares is reflected back</li>
    <li>Black squares reflect less light than the white squares</li>
    <li>The different levels of relfection are <strong>converted into a binary value</strong> (by photoelectric cells) which can be processed by a microprocessor</li>
    <li>Using QR codes is a popular method for storing website addresses and URLs</li>
  </ul>
  <h4>2D Scanner</h4>
  <ul>
    <li>2D scanners usually convert visual data stored on paper into a digital image that can be processed by a microprocessor</li>
    <li>A bright light illuminates the document</li>
    <li>A scan head moves across the document until the whole page has been scanned</li>
    <li>An image is produced and sent to a lens</li>
    <li>The lens focuses the image ontp a <strong>charge couple device (CCD)</strong></li>
    <li>Each pixel generates an electric charge when light falls on it</li>
    <li>Software produces a digital image and may make use of <strong>optical character recognition (OCR)</strong> to convert the scanned text in the digital image into a text file format</li>
  </ul>
  <h4>3D Scanner</h4>
  <h3>Output Devices</h3>
  <p>Output devices are used to display or emit processed data usually in the form light and sound.</p>
  <h3>Sensors</h3>
  <h2>Storage Devices</h2>
  <h3>Primary Storage</h3>
  <ul>
    <li>Primary storage is directly accessed by the CPU</li>
    <li>
      Examples include:
      <ul>
        <li>random access memory (RAM)</li>
        <li>read only memory (ROM)</li>
      </ul>
    </li>
  </ul>
  <h4>RAM and ROM</h4>
  <DataTable>
    <Head>
      <Row>
        <Cell>Memory</Cell>
        <Cell>Volatile</Cell>
        <Cell>Actions</Cell>
      </Row>
    </Head>
    <Body>
      {#each c as row}
        <Row>
          {#each row as cell,i}
            <Cell>
              {#if i === 1}
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
  <h2>Network Hardware</h2>
  <h3>IP Addresses</h3>
  <p>An internet protocol (IP) address is a <strong>unique</strong> identifier assigned to devices connected on the internet. IP addresses:</p>
  <ul>
    <li>can be public or private</li>
    <li>can be static (fixed) or dynamic (changing)</li>
    <li>are made of 4 bytes (0 to 255) separated by full stops</li>
  </ul>
  <h4>IPv4 and IPv6</h4>
  <DataTable>
    <Head>
      <Row>
        <Cell>Address</Cell>
        <Cell>Bits</Cell>
        <Cell>Format</Cell>
        <Cell>Possible Addresses</Cell>
      </Row>
    </Head>
    <Body>
      {#each d as row}
        <Row>
          {#each row as cell,i}
            {#if i === 3}
              <Cell>{@html cell}</Cell>
            {:else}
              <Cell>{cell}</Cell>
            {/if}
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
</section>