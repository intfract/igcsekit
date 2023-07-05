<script>
	import { onMount } from 'svelte'
	onMount(() => {
		const hero = document.querySelector('.hero')
		const heroTextItems = document.querySelectorAll('.hero-text li')
		setTimeout(() => hero?.classList.add('loaded'), 100)
		for (let i = 0; i < heroTextItems.length; i++) {
			const heroTextItem = heroTextItems[i]
			setTimeout(() => heroTextItem.classList.add('loaded'), (i + 1) * 500)
		}
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta property="og:title" content="Home">
	<meta property="og:description" content="Create an account and start studying!">
</svelte:head>

<section>
	<div class="hero">
		<div class="hero-text">
			<h1>IGCSE Kit</h1>
			<ul>
				<li>Free</li>
				<li>Fantastic</li>
				<li>Friendly</li>
			</ul>
		</div>
		<div class="hero-graphic">

		</div>
	</div>
</section>

<style>
	
</style>
