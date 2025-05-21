<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'

  let href = 'https://igcsekit.vercel.app/sitemap.xml'
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
  <h2>Cyber Security</h2>
  <h3>Threats</h3>
  <p>Different cyber security threats have different aims and processes although most have similar aims.</p>
  <h4>Brute-Force</h4>
  <p>A brute-force attack relies on <strong>trial and error</strong> to <strong>guess</strong> a password.</p>
  <ul>
    <li><strong>Combinations</strong> are repeatedly entered until correct password is found</li>
    <li>Can be done automatically by software or manually</li>
  </ul>
  <p>These attacks have many aims such as:</p>
  <ul>
    <li>damaging reputation of a business</li>
    <li>installing malware</li>
    <li>stealing, deleting, and changing data</li>
    <li>locking accounts</li>
  </ul>
  <h4>Denial of Service</h4>
  <p>A DoS attack is carried out by sending multiple requests per second to <strong>overwhelm</strong> a web server and make it unresponsive.</p>
  <p>A distributed denial of service (DDoS) attack involved multiple devices making requests. It is often done using a <strong>botnet</strong>.</p>
  <ul>
    <li>Offender installs malware on multiple devices to create a botnet</li>
    <li>Offender initiates DDoS attack remotely</li>
    <li>Botnet sends multiple requests to web server</li>
    <li>Server is overwhelmed and shuts down</li>
    <li>Legitimate users are no longer able to connect to the unresponsive web server</li>
  </ul>
  <h4>Pharming</h4>
  <p>Pharming happens when malware downloaded on a user's hard drive or a web server redirects the user to a fake website which usually serves a malicious purpose.</p>
  <ol>
    <li>User clicks malicious link and downloads malware</li>
    <li>User types in a web address or clicks a link but gets redirected to a fake website</li>
  </ol>
  <h3>Solutions</h3>
  <h4>Access Levels</h4>
  <p>Access levels provide users with different permissions for data. They notably limit access to:</p>
  <ul>
    <li>reading data</li>
    <li>editing data</li>
  </ul>
  <p>An access level is usually controlled by a username. Users with a higher access level will have more permissions or higher privileges.</p>
  <h4>Firewall</h4>
  <p>A firewall is software or hardware that:</p>
  <ul>
    <li>filters traffic</li>
    <li>blocks unauthorised access</li>
    <li>maintains logs</li>
  </ul>
  <p>Firewalls can also be configured to warn the user of a potentially malicious website and prevent the user from accessing it.</p>
</section>