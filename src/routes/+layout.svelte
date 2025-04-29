<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import type { NavItem } from '$lib/types';
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';

	let { children } = $props();
	let errorPage = $derived(page.error?.message === 'Not Found');

	const navItems: NavItem[] = $state([
		{ href: '/', text: m.about() },
		{ href: '/projects', text: m.projects() },
		{ href: '/resume', text: m.resume() },
		{ href: '/uses', text: 'Uses' }
	]);
</script>

<ModeWatcher />

<div class="fixed inset-0 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
		<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
	</div>
</div>

<div class={`relative ${errorPage ? 'flex w-full flex-col' : ''}`}>
	<Header {navItems} />

	<main class:flex-auto={errorPage}>
		{@render children()}
	</main>

	<Footer {navItems} />
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
