<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  
  export let name: string
  export let category: string
</script>

<Paper color="primary" variant="outlined">
  <Title>{name}</Title>
  <Content>
    <slot></slot>
    <span class="footer">{category} Case Study</span>
  </Content>
</Paper>

<style>
  .footer {
    font-size: 14px;
    font-weight: 600;
  }
</style>