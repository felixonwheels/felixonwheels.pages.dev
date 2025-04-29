<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';

	function onclick() {
		setLocale(getLocale() === 'fr' ? 'en' : 'fr');
	}
</script>

<button
	{onclick}
	aria-current={getLocale() ? 'page' : undefined}
	class="md:text-md flex cursor-pointer place-content-center rounded-full border-transparent bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm focus:border-transparent focus:ring-0 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
>
	{m.language()}
</button>
