<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  import Comparison from '$lib/components/Comparison.svelte'
  import Callout from '$lib/components/Callout.svelte'

  let positives = [
    'devices plugged into the computer are automatically detected and device drivers are automatically loaded up',
  ]

  let negatives = [
    'maximum cable length is roughly 5 metres meaning it cannot be used over long distances',
  ]
</script>

<section>
  <h1>Data Transmission</h1>
  <h2>Types and Methods</h2>
  <h3>Wired Connections</h3>
  <p>There are 2 ways data can be transmitted in terms of bits and wires.</p>
  <ul>
    <li>
      <strong>Serial</strong>: bits are transmitted <strong>one by one</strong> along a <strong>single wire</strong>
    </li>
    <li>
      <strong>Parallel</strong>: bits are transmitted <strong>simultaneously</strong> across <strong>multiple wires</strong>
    </li>
  </ul>
  <p>Parallel transmission has the advantage of sending more bits per cycle. However, parallel transmission is more prone to <strong>errors</strong> than serial transmission.</p>
  <p>There are 3 methods that determine the direction of data transmission.</p>
  <ul>
    <li>
      <strong>Simplex</strong>: data transmission only occurs in one direction from the transmitter to the receiver
    </li>
    <li>
      <strong>Half-Duplex</strong>: data can be transmitted and received by both sides but both sides can't transmit data at the same time
    </li>
    <li>
      <strong>Full-Duplex</strong>: data transmission can occur in both directions simultaneously
    </li>
  </ul>
  <Callout emoji="🤔">
    Data transmission cables are a combination of (serial or parallel) and (simplex or half-duplex or full-duplex).
  </Callout>
  <h3>USB</h3>
  <p>The <strong>Universal Serial Bus</strong> is an <strong>asynchronous</strong> and <strong>serial</strong> method of transmitting data between devices and has become an industry standard.</p>
  <p>Using a USB is a common way of transmitting data from <strong>peripherals</strong> like keyboards, mice, and printers to personal computers. When a device is connected to a USB port, the computer <strong>automatically</strong>:</p>
  <ul>
    <li>detects that the device has been connected</li>
    <li>recognises the device and loads the appropriate <strong>device driver</strong> so that the device can communicate with the computer</li>
  </ul>
  <h4>Advantages and Disadvantages</h4>
  <Comparison {positives} {negatives}></Comparison>
  <h3>Data Packets</h3>
  <p>TCP stands for Transmission Control Protocol and allows programs and computers to exchange information over a network. Information is broken down into <strong>packets</strong> before transmission because smaller chunks of data are easier and quicker to route than large chunks of data.</p>
  <p>Data transmitted over the internet can include any media such as text, images, audio, video, markup, or a combination of theses.</p>
  <h4>Packet Structure</h4>
  <p>The information stored in a data packet is called the <strong>payload</strong>.</p>
  <p>Like any letter, email, or parcel, packets have 3 main components.</p>
  <ul>
    <li>From: <strong>Source IP Address</strong></li>
    <li>To: <strong>Destination IP Address</strong></li>
    <li>Content: <strong>Payload</strong></li>
  </ul>
  <p>Packets are split into 3 parts.</p>
  <ul>
    <li>Header</li>
    <li>Payload</li>
    <li>Trailer</li>
  </ul>
  <p>The header contains metadata about the packet and adds context to the payload.</p>
  <ul>
    <li><strong>Source IP</strong></li>
    <li><strong>Destination IP</strong></li>
    <li><strong>Packet Number</strong></li>
  </ul>
  <h4>Packet Switching</h4>
  <p>A router controls the route a data packet takes. Data packets usually take the most optimal route (path). Packets may arrive out of order or through different routes. This means the packets need to be reordered once the last packet arrives. The process of transmitting data over the internet is called <strong>packet switching</strong></p>
  <ul>
    <li>Routers know which nearby router is closer to the destination device</li>
    <li>Routers can send packets from the same file though different routes to avoid <strong>data traffic</strong></li>
    <li>Packets may arrive out of order and the <strong>packet number</strong> helps the receiving device to reorder the data</li>
    <li>The receiver can send a <strong>resend request</strong> if a packet is missing</li>
  </ul>
  <p>Packet switching has many advantages.</p>
  <ul>
    <li>Interference and corruption are minimal since individual packets can be resent instead of the whole file</li>
    <li>Resending only corrupted packets can save time and <strong>bandwidth</strong> compared to resending an entire file</li>
  </ul>
</section>