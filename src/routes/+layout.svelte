<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import '@picocss/pico/css/pico.pumpkin.min.css';

	let { children } = $props();
</script>

<main class="container">
	<Header />

	{@render children()}

	<Footer />
</main>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
