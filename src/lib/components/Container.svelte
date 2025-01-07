<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		outer = false,
		inner = false,
		children,
		...restProps
	}: {
		outer?: boolean;
		inner?: boolean;
		children?: Snippet<[]>;
		[x: string]: unknown;
	} = $props();
</script>

{#if outer}
	<div {...restProps}>
		<div class="sm:px-8">
			<div class="mx-auto max-w-7xl lg:px-8">
				{@render children?.()}
			</div>
		</div>
	</div>
{:else if inner}
	<div {...restProps}>
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				{@render children?.()}
			</div>
		</div>
	</div>
{:else}
	<div {...restProps}>
		<div class="sm:px-8">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="relative px-4 sm:px-8 lg:px-12">
					<div class="mx-auto max-w-2xl lg:max-w-5xl">
						{@render children?.()}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
