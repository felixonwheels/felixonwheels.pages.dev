<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Footer from '$lib/components/Footer2.svelte';
	import Header from '$lib/components/Header2.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<main>
		<Header />

		<div class="container">
			{@render children()}
		</div>

		<Footer />
	</main>
</ParaglideJS>
