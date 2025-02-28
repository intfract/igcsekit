<script lang="ts">
  import Comparison from '$lib/components/Comparison.svelte'
  import { b as bold, sup } from '$lib/utils/html'
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

  let d: [string, string, boolean, string, string][] = [
    ['HDD', 'Electromagnets', true, 'Slower', 'High'],
    ['SSD', 'NAND & NOR Logic Gates', false, 'Faster', 'Low'],
    ['Blu-ray', 'Blue Lasers', true, 'Slower', 'High'],
    ['DVD', 'Red Lasers', true, 'Slower', 'High'],
  ]

  let e: [string, number, string, string, string][] = [
    ['IPv4', 32, 'denary', bold('.'), `2${sup('32')} possible addresses`],
    ['IPv6', 128, 'hexadecimal', bold(':'), `2${sup('128')} possible addresses`],
  ]

  let positives: string[] = ['Can be accessed remotely from any device with a network connection', 'No need to maintain physical server']
  let negatives: string[] = ['Server crash can cause data loss', 'No control over security']
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
    <li><strong>CU</strong> decodes instruction and executes it by sending control signals to other components</li>
    <li><strong>ALU</strong> executes instruction by performing arithemetic and logic operations</li>
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
  <p>An embedded system is a computer system used to perform a dedicated function. This is different to a general purpose computer like a personal computer. Some examples of embedded systems include:</p>
  <ul>
    <li>lighting systems</li>
    <li>vending machines</li>
    <li>security systems</li>
  </ul>
  <p>Embedded systems run on firmware and do not have any additional peripheral devices. Some of these are <strong>microcontrollers</strong> which are integrated circuits with built in memory.</p>
  <h4>Process</h4>
  <p>Most embedded systems follow a simmilar process or pattern.</p>
  <ol>
    <li>Sensor <strong>continually</strong> sends <strong>digitised data</strong> to microprocessor</li>
    <li>Microprocessor checks data against <strong>stored values</strong></li>
    <li>Microprocessor sends signal to perform action if value is outisde range</li>
    <li>Output device is used to perform action</li>
    <li>Whole process is repeated until stopped</li>
  </ol>
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
  <h3>Output Devices</h3>
  <p>Output devices are used to display or emit processed data usually in the form light and sound. The current syllabus no longer candidates to know the working of these devices.</p>
  <h3>Sensors</h3>
  <p>Multiple sensors can be used to perform the same task. Sensors convert real-world data into electrical signals that can be processed by a microprocessor.</p>
  <p>Sensors usually have a dedicated purpose. Common sensors include:</p>
  <ul>
    <li>
      <strong>pressure</strong>: measures pressure, weight, or mass
    </li>
    <li>
      <strong>infra-red</strong>: detects movement
    </li>
    <li>
      <strong>temperature</strong>: measures temperature
    </li>
    <li>
      <strong>light</strong>: measures brightness
    </li>
    <li>
      <strong>proximity</strong>: detects nearby objects without touching them
    </li>
    <li>
      <strong>level</strong>: determines whether a container is empty or contains liquid
    </li>
  </ul>
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
  <p>RAM stores currently running:</p>
  <ul>
    <li>data</li>
    <li>instructions</li>
    <li>application software</li>
    <li>parts of the OS</li>
  </ul>
  <h3>Secondary Storage</h3>
  <p>The purpose of secondary storage is to <strong>permanently</strong> store files that are <strong>not currently required by the CPU</strong>. It allows data to be transferred to another computer.</p>
  <ul>
    <li>Secondary storage is not directly accessed by the CPU</li>
    <li>
      Examples include:
      <ul>
        <li>hard disk drive (HDD)</li>
        <li>solid state drive (SSD)</li>
        <li>compact disc (CD)</li>
        <li>digital versatile disc (DVD)</li>
      </ul>
    </li>
  </ul>
  <DataTable>
    <Head>
      <Row>
        <Cell>Storage Device</Cell>
        <Cell>Technology</Cell>
        <Cell>Moving Parts</Cell>
        <Cell>Speed</Cell>
        <Cell>Power Consumption</Cell>
      </Row>
    </Head>
    <Body>
      {#each d as row}
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
  <h4>Solid State</h4>
  <p>A solid state storage device does not have moving parts. Instead, it is made of transistors arranged in a grid layout. It uses NAND and NOR gates in electrical circuits to persistently control the flow of electrons.</p>
  <h4>Magnetic</h4>
  <p>A magnetic hard disc is made up of many magnetic discs called platters. Each platter is divided into sectors and concentric tracks.</p>
  <p>The hard disc spins the platters at a high speed and the read-write arm moves the read-write heads over the surface of the disc to the location of the data. The read-write heads have electromagnets which are used to read or write data. The iron particles on each platter can be magnetised to represent a binary value (0 or 1).</p>
  <h4>Optical</h4>
  <p>An optical storage device uses a laser to read and write memory from a disc. The disc contains pits and lands that can be converted into binary by shining a laser and analysing the reflection. An arm moves the laser across the surface of the disc to perform read and write operations. In some optical drives, lasers can burn new pits to overwrite the data.</p>
  <p>The colour of the laser affects the amount of data that can be stored in the disc. Blu-ray uses blue lasers and can store more data than a CD or DVD which use red lasers because blue light has a higher frequency.</p>
  <h3>Virtual Memory</h3>
  <p>Virtual memory is used when there is not enough RAM to run complex software. Virtual memory:</p>
  <ul>
    <li>is allocated inside the hard disk to extend RAM capacity</li>
    <li>prevents software from crashing</li>
    <li>allows the computer to process large amounts of data required for complex software</li>
  </ul>
  <p>Pages of data are transferred between virtual memory and RAM when needed. Inactive RAM resides in virtual memory until it is required for processing again.</p>
  <ol>
    <li>Secondary storage is <strong>partitioned</strong> to make space for virtual memory</li>
    <li>Inactive page is moved from RAM to virtual memory</li>
    <li>This frees space for a page in virtual memory that is immediately required for processing</li>
    <li>Required page is moved from virtual memory to RAM</li>
    <li>Inactive page can be swapped back into RAM when the CPU has finished processing a page</li>
  </ol>
  <h3>Cloud Storage</h3>
  <p>Cloud storage stores data in physical servers managed by a third party.</p>
  <Comparison {positives} {negatives}></Comparison>
  <h2>Network Hardware</h2>
  <h3>NIC</h3>
  <p>A network interface card is a hardware component in a device that enables it to connect to a network.</p>
  <h3>MAC Address</h3>
  <p>A media access control address <strong>uniquely identifies</strong> a device.</p>
  <h3>IP Address</h3>
  <p>An internet protocol address <strong>uniquely identifies</strong> a device on a network. IP addresses:</p>
  <ul>
    <li>can be public or private</li>
    <li>can be static (fixed) or dynamic (changing)</li>
    <li>are made of 4 bytes (0 to 255) separated by full stops</li>
  </ul>
  <h4>IPv4 and IPv6</h4>
  <p>IPv6 is a newer version of IPv4. IPv4 is made of 4 denary numbers ranging from <code>0</code> to <code>255</code> separated by dots. IPv6 is made of 8 hexadecimal numbers ranging from <code>0</code> to <code>FF</code> separated by colons.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Address</Cell>
        <Cell>Bits</Cell>
        <Cell>Digits</Cell>
        <Cell>Separator</Cell>
        <Cell>Possible Addresses</Cell>
      </Row>
    </Head>
    <Body>
      {#each e as row}
        <Row>
          {#each row as cell,i}
            {#if i > 2}
              <Cell>{@html cell}</Cell>
            {:else}
              <Cell>{cell}</Cell>
            {/if}
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h4>Static and Dynamic</h4>
  <p>A static IP address does not change when a device connects to the same network. Static IPs:</p>
  <ul>
    <li>have a consistent location</li>
    <li>are fully traceable</li>
    <li>can reduce network traffic because the website resources can be accessed directly</li>
  </ul>
  <p>A dynamic IP address can change every time a device connects to a network. Dynamic IPs:</p>
  <ul>
    <li>are automatically assigned by the <strong>Dynamic Host Configuration Protocol (DHCP)</strong></li>
    <li>have greater privacy and security</li>
  </ul>
  <h3>Router</h3>
  <p>A router sends data to a specific destination on a network. It also assigns IP addresses and can connect a local network to the internet.</p>
</section>