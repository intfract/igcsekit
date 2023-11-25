<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Ripple from '@smui/ripple'
  import Chip, { Set, LeadingIcon, Text } from '@smui/chips'

  type Socials = {
    github: string,
    discord?: string,
  }

  type Member = {
    name: string,
    tags: string[],
    description: string,
    socials: Socials,
  }

  let members: Member[] = [
    {
      name: 'u_int',
      tags: ['Creator', 'Developer'],
      description: 'The creator of IGCSE Kit and lead developer',
      socials: {
        github: 'intfract',
        discord: 'u_int',
      }
    },
    {
      name: 'dotVansh',
      tags: ['Developer'],
      description: 'Another developer committed to providing free IGCSE resources',
      socials: {
        github: 'intfract',
        discord: 'mr.code5197',
      }
    },
  ]

  let iconMap = {
    'Creator': 'rocket_launch',
    'Developer': 'code',
  }
</script>

<section>
  <h1>About</h1>
  <p>Meet the team!</p>
  <div class="papers">
    {#each members as member}
      <a class="paper" use:Ripple={{ surface: true }} href={`https://github.com/${member.socials.github}`}>
        <Paper color="primary" variant="outlined">
          <Title>
            {member.name}
            <Set chips={member.tags} let:chip class="inline-flex">
              <Chip {chip} shouldRemoveOnTrailingIconClick={false}>
                {#if Object.keys(iconMap).includes(chip)}
                  <LeadingIcon class="material-symbols-rounded">{iconMap[chip]}</LeadingIcon>
                {/if}
                <Text tabindex={0}>{chip}</Text>
              </Chip>
            </Set>
          </Title>
          <Content>{member.description}</Content>
        </Paper>
      </a>
    {/each}
  </div>
</section>