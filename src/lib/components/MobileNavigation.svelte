<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import MenuArrowDownIcon from '$lib/assets/logos/arrow-down-icon.svelte';
	import CloseButton from '$lib/assets/logos/close.icon.svg';
	let openMenu = false;
</script>

<div {...$$restProps}>
	<button
		class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
		type="button"
		on:click={() => (openMenu = !openMenu)}>Menu<MenuArrowDownIcon /></button
	>

	{#if openMenu}
		<div>
			<div
				transition:fade={{ duration: 150 }}
				class="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80"
			/>
			<div
				class="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
				transition:scale={{ duration: 150, start: 0.9 }}
			>
				<div class="flex flex-row-reverse items-center justify-between">
					<button
						aria-label="Close menu"
						class="-m-1 p-1"
						type="button"
						on:click={() => (openMenu = !openMenu)}
					>
						<!-- <CloseButton /> -->
						x
					</button>
					<h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
				</div>
				<nav class="mt-6">
					<ul
						class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
						on:click={() => (openMenu = !openMenu)}
					>
						<li><a class="block py-2" href="/about">About</a></li>
						<li><a class="block py-2" href="/projects">Projects</a></li>
						<li><a class="block py-2" href="/speaking">Speaking</a></li>
						<li><a class="block py-2" href="/uses">Uses</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- <div transition:fade class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" /> -->
	{/if}
</div>
