<script lang="ts">
  import Comparison from '$lib/components/Comparison.svelte'

  let positives: string[] = [
    'Robots can perform dangerous tasks and keep workers safe',
    'Robots can take over repetitive tasks',
    'Efficiency of production may increase',
  ]

  let negatives: string[] = [
    'Could be expensive to setup robots initially',
    'Deskilling of workforce may occur',
  ]
</script>

<section>
  <h1>Emerging Technologies</h1>
  <h2>Automated Systems</h2>
  <h2>Robotics</h2>
  <p>Robotics is a branch of computer science that incorporates the design, construction, and operation of robots.</p>
  <p>Applications of robotics include:</p>
  <ul>
    <li>factory equipment</li>
    <li>domestic robots</li>
    <li>drones</li>
  </ul>
  <h3>Robot</h3>
  <p>A robot:</p>
  <ul>
    <li>has a mechanical structure or framework</li>
    <li>has electrical components</li>
    <li>is programmable</li>
  </ul>
  <h3>Uses</h3>
  <p>Robots can be used in many areas including:</p>
  <ul>
    <li>industry</li>
    <li>transport</li>
    <li>agriculture</li>
    <li>medicine</li>
    <li>domestic</li>
    <li>entertainment</li>
  </ul>
  <p>There are many advantages and disadvantages to using robots in a commercial environment. This is where economic concepts intersect with computer science.</p>
  <Comparison {positives} {negatives}></Comparison>
  <h2>Artifical Intelligence</h2>
  <p>AI is a branch of computer science dealing with the simulation of intelligent behaviours by computers.</p>
  <h3>Expert System</h3>
  <p>An expert system tries to make decisions and works alongside humans. Expert systems have:</p>
  <ul>
    <li>
      <strong>Knowledge Base</strong>: a repository of facts
    </li>
    <li>
      <strong>Rule Base</strong>: the logic that the expert system must follow
    </li>
    <li>
      <strong>Inference Engine</strong>: the brain of the expert system that makes decisions by <strong>applying</strong> rules to knowledge to provide a result
    </li>
    <li>
      <strong>Interface</strong>: the method by which a user can interact with the expert system
    </li>
  </ul>
  <p>The effectiveness of an expert system relies on the accuracy of facts in the knowledge base provided by human experts.</p>
  <h3>Machine Learning</h3>
  <p>Machine learning is when a program has the ability to automatically adapt its own processes or data.</p>
</section>