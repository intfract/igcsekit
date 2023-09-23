<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'

  let href = 'https://igcse.cyclic.app/sitemap.xml'
</script>

<section>
  <h1>The Internet</h1>
  <h2>The World Wide Web</h2>
  <p>The internet is the infrastructure while the wolrd wide web is a collection of websites and web pages accessed using the internet.</p>
  <h3>Uniform Resource Locator</h3>
  <p>A URL is a text-based address for a web page. It can contain the protocol, the domain name, and the name of the web page or file.</p>
  <p>For example, <a {href} target="_blank">{href}</a> is a URL where:</p>
  <ul>
    <li><code>https</code> is the protocol</li>
    <li><code>igcse.cyclic.app</code> is the domain name</li>
    <li><code>sitemap.xml</code> is the file name</li>
  </ul>
  <Callout emoji="🤔">
    Sitemaps allow web crawlers like Googlebot to index web pages and display them in search engine results.
  </Callout>
  <h3>Protocols</h3>
  <p>Some of the most common protocols are:</p>
  <ul>
    <li>HyperText Transfer Protocol</li>
    <li>HyperText Transfer Protocol Secure</li>
    <li>Simple Mail Transfer Protocol</li>
    <li>WebSocket</li>
  </ul>
  <h4>HTTP</h4>
  <p>HTTP is the protocol used for transferring data between a client and a server on the internet. It sends data in plain text format which makes it vulnerable to interception.</p>
  <h4>HTTPS</h4>
  <p>HTTPS is a secure version of HTTP that uses <strong>encryption</strong> to protect data transferred between a client and a server.</p>
  <p>HTTPS uses security protocols such as <strong>SSL</strong> or <strong>TLS</strong> (successor of SSL). These security protocols use a combination of symmetric and asymmetric encryption to secure data.</p>
  <ul>
    <li>Browser (client) requests secure connection to server</li>
    <li>Browser requests server to <strong>identify itself</strong></li>
    <li>Server provides a <strong>digital certificate</strong></li>
    <li>Browser <strong>validates</strong> certificate</li>
    <li>Data transmission takes place</li>
  </ul>
  <h3>Web Browser</h3>
  <p>The main purpose of a web browser is to render HyperText Markup Language (HTML) on a web page.</p>
  <Callout emoji="⚠">
    HTML is <strong>not</strong> a programming language.
  </Callout>
  <p>Other functions of a web browser include:</p>
  <ul>
    <li>storing bookmarks</li>
    <li>recording user history</li>
    <li>allowing use of multiple tabs</li>
    <li>storing cookies</li>
    <li>providing navigation tools</li>
    <li>providing an address bar</li>
  </ul>
  <h3>Web Page Retrieval</h3>
  <p>Websites are hosted on a web server that has its own IP address. A browser needs to know the IP address of this web server to locate its resources such as HTML web pages and other files. A <strong>Domain Name System (DNS)</strong> is used to find the IP address of the domain name in a URL. This makes it easier for users to locate web pages because they can memorise domain names more easily than IP addresses.</p>
  <p>A URL is converted into an IP address suring the DNS process. This process can involve multiple DNS servers if the first server is unable to find the IP of the given URL.</p>
  <ol>
    <li>User clicks a link or enters a URL in the address bar of browser</li>
    <li>Browser requests DNS server for the IP of URL</li>
    <li>DNS server maps the URL to an IP</li>
    <li>DNS server sends IP to browser</li>
    <li>Browser initiates communication with web server and downloads the requested web pages</li>
    <li>Browser renders HTML and displays it to user</li>
  </ol>
  <h3>Cookies</h3>
  <p>Cookies are small <strong>text</strong> files that are sent between a <strong>web browser</strong> and a <strong>web server</strong>.</p>
  <p>Cookies have a variety of functions such as:</p>
  <ul>
    <li>storing login details</li>
    <li>saving personal details</li>
    <li>tracking user preferences</li>
    <li>holding items in an online shopping cart</li>
  </ul>
  <Callout emoji="🤔">
    Coookies are harmless, but hackers could use the data stored in cookies to steal personal information. They are not very tasty either.
  </Callout>
  <h2>Digital Currency</h2>
  <p>A digital currency is a type of currency that only exists electronically. It has no physical form like fiat currency issued by governments.</p>
  <h3>Blockchain</h3>
  <p>Blockchain is an example of a decentralised system because it is not controlled by a singular and central authority.</p>
  <p>Blockchain is basically a digital ledger with a time-stamped series of records that are impossible to alter. Each block:</p>
  <ul>
    <li>
      represents a transaction and contains data related to the:
      <ul>
        <li>sender</li>
        <li>recipient</li>
        <li>amount of money</li>
        <li>currency</li>
      </ul>
    </li>
    <li>has a timestamp</li>
    <li>has a <strong>hash</strong> that acts as a unique identifier or digital fingerprint</li>
    <li>except the first block stores the hash value of the previous block in the chain</li>
  </ul>
</section>