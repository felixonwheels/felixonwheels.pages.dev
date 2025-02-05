<script lang="ts">
	import profile from '$lib/assets/profile.webp';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import type { NavItem } from '$lib/types';

	let open = $state(false);

	let { navItems, ...restProps }: { navItems: NavItem[]; [x: string]: unknown } = $props();
</script>

<Popover.Root bind:open>
	<div {...restProps}>
		<div class="mx-auto w-full max-w-7xl py-4 sm:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-4xl lg:max-w-5xl">
					<div class="relative flex items-center justify-between gap-6">
						<div>
							<LanguageToggle />
						</div>

						<div class="flex items-center gap-6">
							<div>
								<Popover.Trigger
									class="rounded-full bg-white/90 px-4 py-2 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5  dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
									type="button"
								>
									<div class="flex items-center space-x-1">
										<p class="text-sm">Menu</p>
										<ChevronDown size={18} />
									</div>
								</Popover.Trigger>

								<Popover.Content
									class="mr-2 mt-2 rounded-xl p-4 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5  dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10"
									onCloseAutoFocus={(e) => e.preventDefault()}
								>
									<nav class="m-4">
										<ul class="text-end text-2xl text-zinc-800 dark:text-zinc-300">
											{#each navItems as navItem}
												<li>
													<a
														class="block px-4 py-4"
														href={navItem.href}
														onclick={() => (open = false)}
													>
														<b>{navItem.text}</b>
													</a>
												</li>
											{/each}
										</ul>
									</nav>
								</Popover.Content>
							</div>
							<div
								class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
							>
								<a href="/" aria-label="Home">
									<img
										src={profile}
										alt=""
										sizes="2.25rem"
										class="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Popover.Root>
