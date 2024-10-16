<script lang="ts">

	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import '../app.css';

</script>

<div class="bg-background flex flex-col min-h-screen w-screen max-w-screen">
	<Header />
	<main class="min-h-[150vh] z-10 container pt-12 flex flex-col gap-12"><slot/></main>
	<div class="w-screen h-[calc(150vh)] bg-paper"></div>
	<Footer />
</div>