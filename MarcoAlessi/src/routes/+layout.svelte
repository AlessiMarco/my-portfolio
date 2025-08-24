<script lang="ts">
	import '../app.css';
	import Navabar from "$lib/components/Navabar.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Footer from '$lib/components/Footer.svelte'

	let { children } = $props();
</script>

<svelte:head>
	<meta name="author" content="Marco Alessi" />
	<meta name="description" content="Personal portfolio of Marco Alessi – web developer & designer." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="icon" href="/favicon.ico" />

	<title>Marco Alessi – Web Portfolio</title>
</svelte:head>

<header>
	<Navabar /> 
	<Hero />
</header>

<main class=" min-h-screen px-4">
	{@render children()}
</main>

<Footer />