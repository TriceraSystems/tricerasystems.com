<script lang="ts">

	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import '../app.css';

</script>

<div class="bg-background flex flex-col min-h-screen w-screen max-w-screen">
	<Header />
	<slot />
	<Footer />
</div>