<script lang="ts">
	import { page } from '$app/state';
	import profile from '$lib/assets/profile.webp';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import { deLocalizeHref, localizeHref } from '$lib/paraglide/runtime.js';
	import type { NavItem } from '$lib/types';
	import { cn } from '$lib/utils';

	let { navItems, ...restProps }: { navItems: NavItem[]; [x: string]: unknown } = $props();
</script>

<div {...restProps}>
	<div class="relative mx-auto my-8 w-full max-w-7xl px-4 sm:px-8">
		<div class="relative px-8 sm:px-12 lg:px-24">
			<div class="mx-auto max-w-4xl lg:max-w-5xl">
				<div class="relative flex justify-between">
					<div
						class="h-12 w-12 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
					>
						<a href={localizeHref('')} aria-label="Home">
							<img
								src={profile}
								alt=""
								sizes="2.25rem"
								class="h-11 w-11 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</a>
					</div>
					<div>
						<nav>
							<ul
								class="text-sm-custom flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
							>
								{#each navItems as navItem}
									<li>
										<a
											href={localizeHref(navItem.href)}
											class={cn(
												'relative block px-3 py-2 transition',
												deLocalizeHref(page.url.pathname) === navItem.href &&
													'text-teal-500 dark:text-teal-400',
												!(deLocalizeHref(page.url.pathname) === navItem.href) &&
													'hover:text-teal-500 dark:hover:text-teal-400'
											)}
										>
											{navItem.text}
											{#if deLocalizeHref(page.url.pathname) === navItem.href}
												<span
													class="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
												></span>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						</nav>
					</div>
					<div>
						<LanguageToggle />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
