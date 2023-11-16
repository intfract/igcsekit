<script lang="ts">
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
      description: '',
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
</section>