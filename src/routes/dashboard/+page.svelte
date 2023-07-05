<script>
	import Paper, { Title, Subtitle, Content } from '@smui/paper'
	import Ripple from '@smui/ripple'
	let igcse = [
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

	for (const item of igcse) {
		item['link'] = ['igcse', item.title.toLowerCase().replaceAll(' ', '_')].join('/')
	}
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="IGCSE Kit Dashboard" />
</svelte:head>

<section>
	<h1>Dashboard</h1>
	<h2>Courses</h2>
	<h3>IGCSE</h3>
	<div class="papers">
		{#each igcse as item}
			<a class="paper" use:Ripple={{ surface: true }} href={item.link}>
				<Paper color="primary" variant="outlined">
					<Title>{item.title}</Title>
					<Content>{item.description}</Content>
				</Paper>
			</a>
		{/each}
	</div>
</section>

<style>
	
</style>