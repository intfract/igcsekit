<script lang="ts">
  import { tag } from '$lib/utils/html'
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Ripple from '@smui/ripple'
  import Chip, { Set, LeadingIcon, Text } from '@smui/chips'

  type Socials = {
    github?: string,
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
      name: 'intfract',
      tags: ['Founder', 'Developer', 'Author'],
      description: `Integer is the founder of IGCSE Kit and a discord bot developer at ${tag('a', 'r/IGCSE', { href: 'https://reddit.com/r/igcse' })}. He developed the first pseudocode web compiler and wrote most of the notes on this website.`,
      socials: {
        github: 'intfract',
        discord: 'u_int',
      }
    },
    {
      name: 'pihedron',
      tags: ['Developer', 'Author'],
      description: `Pihedron is a mathematics and computer science content creator on ${tag('a', 'YouTube', { href: 'https://youtube.com/@pihedron' })}.`,
      socials: {
        github: 'pihedron',
        discord: 'pihedral',
      }
    },
    {
      name: 'dotVansh',
      tags: ['Developer'],
      description: `Vansh is a computer science and mathematics helper at ${tag('a', 'r/IGCSE', { href: 'https://reddit.com/r/igcse' })}.`,
      socials: {
        github: 'dotvansh',
        discord: 'mr.code5197',
      }
    },
    {
      name: 'PeaceGod',
      tags: ['Author'],
      description: `Peace God is an author for IGCSE Computer Science and wrote notes for the ${tag('a', 'Data Representation', { href: '/igcse/computer_science/data_representation' })} chapter.`,
      socials: {
        github: '',
        discord: '_peacegod.',
      }
    },
  ]

  let iconMap = {
    'Founder': 'rocket_launch',
    'Developer': 'code',
    'Author': 'draw',
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
          <Content>{@html member.description}</Content>
        </Paper>
      </a>
    {/each}
  </div>
</section>