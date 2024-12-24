<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';
</script>

<a
	role="button"
	aria-current={languageTag() ? 'page' : undefined}
	href={i18n.route(page.url.pathname)}
	hreflang={languageTag() === 'fr' ? 'en' : 'fr'}
	class="md:text-md flex place-content-center rounded-full border-transparent bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur focus:border-transparent focus:ring-0 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
>
	{m.language()}
</a>
