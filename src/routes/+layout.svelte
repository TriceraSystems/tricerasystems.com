<script lang="ts">

	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import '../app.css';

</script>

<div class="bg-background flex flex-col min-h-screen w-screen max-w-screen">
	<Header />
	<div class="min-h-screen z-10">
		<slot />
	</div>
	<div class="w-screen h-[calc(125vh)] bg-paper"></div>
	<Footer />
</div>