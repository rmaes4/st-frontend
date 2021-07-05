<script lang="ts">
	import Footer from '$lib/Footer/index.svelte';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
