<script lang="ts">
  import Grid from '$lib/components/Grid.svelte';
import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, number][] = [
    ['Binary', 2],
    ['Denary', 10],
    ['Hexadecimal', 16],
  ]
</script>

<section>
  <h1>Data Representation</h1>
  <h3>Binary</h3>
  <p>Data is processed using <strong>logic gates</strong> and stored in registers. Any form of data needs to be converted to <strong>binary</strong> (0 or 1) to be processed by a computer.</p>
  <h3>Number Systems</h3>
  <DataTable>
    <Head>
      <Row>
        <Cell>Topic</Cell>
        <Cell>Description</Cell>
      </Row>
    </Head>
    <Body>
      {#each a as row}
        <Row>
          {#each row as cell,i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h3>Hexadecimal</h3>
  <p>Hexadecimal is used in areas like:</p>
  <ul>
    <li>MAC adresses</li>
    <li>IPv6 address</li>
    <li>error codes</li>
    <li>HTML colour codes</li>
  </ul>
  <p>Hexadecimal is easier for humans to understand than binary, as it is a shorter representation of binary</p>
  <h3>Binary Addition</h3>
  <p>While adding 2 positive binary integers, there are some rules to follow. They are:</p>
  <ul>
    <li>0 + 0 = 0</li>
    <li>0 + 1 = 1</li>
    <li>1 + 1 = 10</li>
    <li>1 + 1 + 1 = 11</li>
  </ul>
  <p>For example, 10010100 + 00011110 = 10110010.</p>
  <Grid first="10010100" second="00011110" result="10110010" working="   11   "></Grid>
  <h3>Overflow Error</h3>
  <p>An overflow error will occur if the value is greater
    than 255 in an 8-bit register.
    A computer or a device has a predefined limit
    that it can represent or store, for example 16-bit.
    An overflow error occurs when a value outside
    this limit should be returned</p>
  <h3>Logical Shifts</h3>
  <p>When a logical <strong>left shift</strong> is done on an 8-bit binary integer the denary value of that is <strong>multiplied by 2</strong> each time.</p>
  <p>When a logical <strong>right shift</strong> is done on an 8-bit binary integer the denary value of that is <strong>divided by 2</strong> each time.</p>
  <ul>
    <li>Bits shifted from the end of the register are lost
      and zeros are shifted in at the opposite end of the
      register.</li>
    <li>The most significant bit(s) or least significant
      bit(s) are lost</li>
  </ul>
  <h3>Two's Complement</h3>
  <p>-35</p>
  <ol>
    <li>Convert to binary</li>
    <div class="row">
      <div class="cell">0</div>
      <div class="cell">0</div>
      <div class="cell">1</div>
      <div class="cell">0</div>
      <div class="cell">0</div>
      <div class="cell">0</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
    </div>
    <li>Flip all the bits</li>
    <div class="row">
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">0</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">0</div>
      <div class="cell">0</div>
    </div>
    <li>Add 1 at the last</li>
    <div class="row">
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">0</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
      <div class="cell">0</div>
      <div class="cell">1</div>
    </div>
  </ol>
  <h3>Character Sets</h3>
  <p>A character set contains symbols that are each assigned a unique binary value.</p>
  <p>Character sets help convert text into binary for computers to process.</p>
  <p>There are 2 types of character sets:</p>
  <ul>
    <li>
      <strong>ASCII</strong>: it represents characters using 8-bit binary numbers (256 max)
    </li>
    <li>
      <strong>Unicode</strong>: represents characaters using 16-bit binary numbers
    </li>
  </ul>
  <h3>Sound</h3>
  <p>A sound wave is sampled for sound to be converted to binary, which is processed by a computer.</p>
  <ul>
    <li>Sample rate is the number of samples taken in a second</li>
    <li>Sample resolution is the number of bits per sample</li>
    <li>Accuracy of the recording and the file size increases as the sample rate and resolution increase</li>
  </ul>
  <h3>Images</h3>
  <p>An image is series of pixels that are converted to binary, which is processed by a computer.</p>
  <ul>
    <li>The resolution is the number of pixels in the image.</li>
    <li>The colour depth is the number of bits used to represent each colour.</li>
    <li>The file size and quality of the image increases as the resolution and colour depth increase.</li>
  </ul>
  <h3>Measurement of Data Storage</h3>
  <p>Bits are the smallest unit of data. Bytes are commonly used to measure the size of data. Unlike denary units (kilobyte) which are multiplied by 1000, binary units (kibibyte) are multiplied by 1024.</p>
  <ul>
    <li>Bits: the smallest unit</li>
    <li>Nibble: 4 bits</li>
    <li>Byte: 8 bits</li>
    <li>Kibibyte (KiB): 1024 bytes</li>
    <li>Mebibyte (MiB): 1024 KiB</li>
    <li>Gibibyte (GiB): 1024 MiB</li>
    <li>Tebibyte (TiB): 1024 GiB</li>
    <li>Pebibyte (PiB): 1024 TiB</li>
    <li>Exbibyte (EiB): 1024 PiB</li>
  </ul>
  <h4>Calculating File Size</h4>
  <p>The dimensions of images are measured in pixels.</p>
  <ul>
    <li>Images: width &times; height &times; colour depth</li>
    <li>Audio: sample rate &times; length &times; sample resolution</li>
  </ul>
  <h3>Data compression</h3>
  <p>It exists to reduce the the size of the file.</p>
  <p>The impact of this is, eg:</p>
  <ul>
    <li>less bandwith required</li>
    <li>less storage required</li>
    <li>shorter transimission time</li>
  </ul>
  
  <p>Lossless compression reduces the file size without permanent loss of data, eg. run length encoding (RLE). It
    uses a compression algorithm. The repeating patterns are indentified and are indexed with number of times
    they occur, their position.</p>
  
  <p>Lossy compression uses a compression algorithm that finds the unnecessary and redundant data in the file.
    This data is permanently removed from the file. This type of compression is mainly used on an image file or
    a sound file. Unnecessary data like colour depth, image resolution, sample rate and sample resolution.</p>
</section>

<style>
  .row {
    display: flex;
    flex-direction: row;
  }

  .cell {
    width: 20px;
    height: 20px;
    text-align: center;
  }
</style>
