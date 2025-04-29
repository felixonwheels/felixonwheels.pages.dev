<script lang="ts">
	import DesktopNavigation from '$lib/components/DesktopNavigation.svelte';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';
	import type { NavItem } from '$lib/types';

	let { navItems }: { navItems: NavItem[] } = $props();
</script>

<MobileNavigation {navItems} class="md:hidden" />
<DesktopNavigation {navItems} class="hidden md:block" />
