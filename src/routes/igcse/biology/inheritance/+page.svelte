<script lang="ts">
  import Punnett from '$lib/components/Punnett.svelte'

  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  let a: [string, string][] = [
    ['Chromosome', 'A thread-like structure of DNA that carries genetic information in the form of genes'],
    ['Gene', 'A length of DNA that codes for a protein'],
    ['Allele', 'A version of a gene'],
    ['Haploid', 'When a nucleus contains a single set of unpaired chromosomes (gametes)'],
    ['Diploid', 'When a nucleus contains 2 sets of paired chromosomes (body cells)'],
  ]

  let b: [string, string][] = [
    ['Genotype', 'The genetic structure of an organmism in terms of alleles present'],
    ['Phenotype', 'The observable features of an organism'],
    ['Homozygous', 'When the genotype has identical alleles of a particular gene'],
    ['Heterozygous', 'When the genotype has different alleles of a particular gene'],
    ['Dominant Allele', 'An allele that is expressed if it is present'],
    ['Recessive Allele', 'An allele that is only expressed if a dominant allele is not present'],
  ]
</script>

<section>
  <h1>Inheritance</h1>
  <p>Inheritance is the transmission of genetic information from generation to generation.</p>
  <h2>Chromosomes and Genes</h2>
  <DataTable>
    <Head>
      <Row>
        <Cell>Term</Cell>
        <Cell>Definition</Cell>
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
  <h3>Chromosomes</h3>
  <p>These bundles of DNA are found in the <strong>nucleus</strong>.</p>
  <h3>Human Cells</h3>
  <p>The chromosomes in all diploid cells are arranged in pairs. However, different species will have a different number of chromosomes.</p>
  <ul>
    <li>Human diploid cells have <strong>23 pairs</strong> of chromosomes (46 in total)</li>
    <li>Human gamets are haploid and only have <strong>23 unpaired</strong> chromosomes</li>
  </ul>
  <h2>Cell Division</h2>
  <h3>Mitosis</h3>
  <p>This is a type of nuclear division that produces <strong>genetically identical</strong> cells.</p>
  <ul>
    <li>The duplication of chromosomes occurs <strong>before</strong> mitosis</li>
    <li>
      Mitosis plays a vital role in:
      <ul>
        <li>growth</li>
        <li>repair of damaged tissue</li>
        <li>replacement of cells</li>
        <li>asexual reproduction</li>
      </ul>
    </li>
  </ul>
  <h3>Meiosis</h3>
  <p>This type of nuclear division is also called reduction division because the chromosome number is <strong>halved</strong> from diploid to <strong>haploid</strong>, resulting in genetically different cells.</p>
  <ul>
    <li>
      Meiosis is involved in the production gametes such as:
      <ul>
        <li>sperm (male)</li>
        <li>egg (female)</li>
      </ul>
    </li>
  </ul>
  <h2>Monohybrid Inheritance</h2>
  <DataTable>
    <Head>
      <Row>
        <Cell>Term</Cell>
        <Cell>Definition</Cell>
      </Row>
    </Head>
    <Body>
      {#each b as row}
        <Row>
          {#each row as cell,i}
            <Cell>{cell}</Cell>
          {/each}
        </Row>
      {/each}
    </Body>
  </DataTable>
  <h3>Punnett Squares</h3>
  <Punnett mother="Ff" father="Ff"></Punnett>
  <h2>Variation and Selection</h2>
  <!-- insert glossary table -->
  <h3>Variation</h3>
  <p>There are 2 types of variation.</p>
  <ul>
    <li>
      <strong>Continuous</strong>
      <ul>
        <li>When a <strong>range of phenotypes</strong> can be expressed</li>
        <li>Continuous data like <strong>height in humans</strong></li>
      </ul>
    </li>
    <li>
      <strong>Discontinuous</strong>
      <ul>
        <li>When only a <strong>limited number of phenotypes</strong> can be expressed</li>
        <li>Discrete data like <strong>blood group</strong></li>
      </ul>
    </li>
  </ul>
</section>