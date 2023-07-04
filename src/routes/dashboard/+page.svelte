<script>
	import Carousel from '$lib/components/Carousel.svelte'
	let igcse = [
		{
			title: 'biology',
			icon: 'microbiology',
		},
	]
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="IGCSE Kit Dashboard" />
</svelte:head>

<section>
	<h1>Dashboard</h1>
	<h2>Courses</h2>
	<h3>IGCSE</h3>
	<Carousel items={igcse}></Carousel>
</section>

<style>
	
</style>