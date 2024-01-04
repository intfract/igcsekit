<script lang="ts">
  import Callout from '$lib/components/Callout.svelte'
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import SQL from '$lib/components/SQL.svelte'

  let a: [string, string][] = [
    ['Text & Alphanumeric', 'Names, Phone Numbers'],
    ['Character', 'Gender'],
    ['Boolean', 'True & False'],
    ['Integer', 'Population'],
    ['Real', 'Money'],
    ['Date & Time', 'Date of Birth'],
  ]

  let sql = 'SELECT field_1, field_2\nFROM my_table\nWHERE field_1 > 0 AND field_2 = "YES";'
</script>

<section>
  <h1>Databases</h1>
  <h2>Table</h2>
  <p>Databases are made up of tables. A table has columns called fields and rows called records. In IGCSE, databases only consist of a single table.</p>
  <ul>
    <li>Fields are the different categories in a table which organise data belonging to the same group</li>
    <li>Records are groups of data that often have a unique identifier</li>
    <li>Validation is used to set rules for fields</li>
  </ul>
  <Callout emoji="🤔">
    A table may have a <strong>header row</strong> to display the name of each field. A header row is <strong>not</strong> a record.
  </Callout>
  <h2>Data Types</h2>
  <p>Similar to programming, databases also have data types to enforce consistency and prevent errors. Different information can require different data types. It is important to be efficient and account for all possibilities when selecting a data type for a field.</p>
  <DataTable>
    <Head>
      <Row>
        <Cell>Type</Cell>
        <Cell>Example</Cell>
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
  <p>Phone numbers are always a text field and not a numeric field!</p>
  <h2>Primary Key</h2>
  <p>A primary key is a <strong>field</strong> in a table that acts as a <strong>unique identifier</strong> for a record. For example, a number plate can be used to uniquely identify a car. Primary keys often have a specific format and are mostly named along the lines of <code>ID</code>.</p>
  <h2>SQL</h2>
  <p>SQL stands for Structured Query Language. It is used to fetch information from a database. Just like most programming languages, SQL has keywords. In IGCSE, only 6 keywords are used.</p>
  <ul>
    <li>
      <strong><code>SELECT</code></strong>: chooses which fields to display (<code>*</code> means all fields) 
    </li>
    <li>
      <strong><code>FROM</code></strong>: points to the name of the table where the data can be found
    </li>
    <li>
      <strong><code>WHERE</code></strong>: filters records using conditions
    </li>
    <li>
      <strong><code>ORDER BY</code></strong>: sorts records in ascending order by default
    </li>
    <li>
      <strong><code>SUM</code></strong>: calculates the total a field
    </li>
    <li>
      <strong><code>COUNT</code></strong>: counts the number of records
    </li>
  </ul>
  <SQL code={sql}></SQL>
</section>