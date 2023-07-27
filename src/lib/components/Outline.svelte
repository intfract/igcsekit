<script lang="ts">
  type Heading = {
    name: string,
    id: string,
  }

  export let headings: Heading[]
</script>

<!-- document outline -->
<div class="outline">
  <ul>
    <li>Heading</li>
  </ul>
</div>

<style>
  .outline {
    position: absolute;
    top: 16px;
    right: 16px;
  }
</style>