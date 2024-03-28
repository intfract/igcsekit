<script lang="ts">
  import LinearProgress from '@smui/linear-progress'
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Button, { Label, Icon } from '@smui/button'
  import IconButton from '@smui/icon-button'
  import Ripple from '@smui/ripple'
  import { getLastCommit } from '$lib/utils/github'
  import RelativeTime from '@yaireo/relative-time'

  const relativeTime = new RelativeTime()

  let igcse: {
    title: string,
    icon: string,
    description: string,
    link?: string,
  }[] = [
    {
      title: 'Mathematics',
      icon: 'calculate',
      description: 'IGCSE 0580 Mathematics',
    },
    {
      title: 'Biology',
      icon: 'microbiology',
      description: 'IGCSE 0610 Biology',
    },
    {
      title: 'Chemistry',
      icon: 'science',
      description: 'IGCSE 0620 Chemistry',
    },
    {
      title: 'Physics',
      icon: 'speed',
      description: 'IGCSE 0625 Physics',
    },
    {
      title: 'Computer Science',
      icon: 'terminal',
      description: 'IGCSE 0478 Computer Science',
    },
    {
      title: 'Economics',
      icon: 'savings',
      description: 'IGCSE 0455 Economics',
    },
    {
      title: 'Geography',
      icon: 'public',
      description: 'IGCSE 0460 Geography',
    },
  ]

  let index = 0
  let transition = false

  for (const item of igcse) {
    item['link'] = ['/igcse', item.title.toLowerCase().replaceAll(' ', '_')].join('/')
  }

  function skip(n: number) {
    transition = true
    setTimeout(() => {
      index += n
      index = (index + igcse.length) % igcse.length
    }, 150)
    setTimeout(() => {
      transition = false
    }, 150)
  }

  let banner: HTMLDivElement

  function setMousePosition(e: MouseEvent) {
    banner.style.setProperty('--mouse-x', `${e.x}px`)
    banner.style.setProperty('--mouse-y', `${e.y}px`)
  }
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="IGCSE Kit Dashboard" />
</svelte:head>

<div class="container" on:mousemove={e => setMousePosition(e)}>
  <Paper variant="raised" style="grid-row-end: span 2;">
    <Title>IGCSE</Title>
    <Content>
      <div class="carousel">
        <div class="cards">
          {#each igcse as item,i}
            <a class="card" use:Ripple={{ surface: true }} href={item.link} class:active={i === index} class:left={i === (index - 1 + igcse.length) % igcse.length} class:right={i === (index + 1 + igcse.length) % igcse.length}>
              <span class="material-symbols-rounded">{item.icon}</span>
              <span class="name">{item.title}</span>
              <span class="more">{item.description}</span>
            </a>
          {/each}
        </div>
        <div class="buttons">
          <IconButton class="material-symbols-rounded" title="next" on:click={e => skip(-1)}>arrow_left_alt</IconButton>
          <IconButton class="material-symbols-rounded" title="next" on:click={e => skip(1)}>arrow_right_alt</IconButton>
        </div>
      </div>
    </Content>
  </Paper>
  <Paper variant="raised">
    <Title>Patch Notes</Title>
    <Content>
      <div class="patch-notes">
        {#await getLastCommit()}
          <LinearProgress indeterminate></LinearProgress>
        {:then json}
          <div class="commit-info">
            <a href={json.author.url}>{json.commit.author.name}</a>
            {json.commit.message}
            {relativeTime.from(new Date(json.commit.author.date))}
          </div>
          <div class="actions">
            <Button variant="raised" on:click={e => window.open(json.html_url, '_blank')}>
              <Icon class="material-symbols-rounded">code</Icon>
              <Label>View Code</Label>
            </Button>
          </div>
        {/await}
      </div>
    </Content>
  </Paper>
  <Paper>
    <Title>Resources</Title>
    <Content>
      <ul>
        <li>
          <a href="https://rigcse.vercel.app" target="_blank">r/IGCSE Unofficial</a>
        </li>
        <li>
          <a href="https://pseudocode.pro" target="_blank">Pseudocode Pro</a>
        </li>
      </ul>
    </Content>
  </Paper>
  <div class="banner" bind:this={banner}>
    <h1 class="headline">More <span class="gradient">AI content</span> coming soon!</h1>
  </div>
</div>

<style>
  .container {
    box-sizing: border-box;
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 32px;
  }

  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column-end: span 2;
    background-image: radial-gradient(circle at 4px 4px, var(--mdc-theme-callout) 4px, transparent 0);
    background-size: 40px 40px;
    background-position: 50% 50%;
    background-position: calc(var(--mouse-x) * 0.25) calc(var(--mouse-y) * 0.25);
  }

  .headline {
    margin-block: 0;
  }

  .gradient {
    color: var(--mdc-theme-primary);
    background: -webkit-linear-gradient(0, var(--mdc-theme-primary), #c5667f);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards {
    position: relative;
    width: 256px;
    height: 384px;
  }

  .cards a {
    color: var(--mdc-theme-on-surface);
    transition: 0.2s;
  }

  .cards a:hover {
    opacity: 1;
  }

  .card {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--mdc-theme-callout);
    text-align: center;
    transform: scale(0);
    pointer-events: none;
  }

  .card.active {
    transform: scale(1);
    z-index: 1;
    pointer-events: all;
  }

  .card.right {
    transform: scale(0.5) translate(150%, 0);
    opacity: 0.5;
  }

  .card.left {
    transform: scale(0.5) translate(-150%, 0);
    opacity: 0.5;
  }

  .card .material-symbols-rounded {
    font-size: 48px;
  }

  .more {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in;
  }

  .card:hover .more {
    max-height: 48px;
  }

  .buttons {
    margin-top: 4px;
  }

  .actions {
    margin-top: 16px;
  }
</style>