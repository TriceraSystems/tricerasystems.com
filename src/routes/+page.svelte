<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script lang="ts">
	import type { LayoutData } from './$types';
	import Hero from '$components/hero.svelte';
	import Pricing from '$components/pricing.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data: LayoutData;
</script>

<Hero />
<Pricing data={data.components.pricing} />