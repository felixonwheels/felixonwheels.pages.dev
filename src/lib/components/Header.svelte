<script lang="ts">
	import { page } from '$app/state';
	import DesktopNavigation from '$lib/components/DesktopNavigation.svelte';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import type { NavItem } from '$lib/types';

	const navItems: NavItem[] = $state([
		{ href: '/', text: m.about() },
		{ href: '/projects', text: m.projects() },
		{ href: '/resume', text: m.resume() },
		{ href: '/uses', text: 'Uses' }
	]);
</script>

<MobileNavigation {navItems} class="md:hidden" />
<DesktopNavigation {navItems} class="hidden md:block" />
