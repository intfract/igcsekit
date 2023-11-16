<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Ripple from '@smui/ripple'

  type Socials = {
    github?: string,
    discord?: string,
  }

  type Member = {
    name: string,
    description: string,
    socials: Socials,
  }

  let members: Member[] = [
    {
      name: 'u_int',
      description: 'Owner',
      socials: {
        github: 'intfract',
        discord: 'u_int',
      }
    },
  ]
</script>

<section>
  <h1>About</h1>
  <p>Meet the team!</p>
  <div class="papers">
    {#each members as member}
      <a class="paper" use:Ripple={{ surface: true }}>
        <Paper color="primary" variant="outlined">
          <Title>{member.name}</Title>
          <Content>{member.description}</Content>
        </Paper>
      </a>
    {/each}
  </div>
</section>