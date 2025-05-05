<script lang="ts">
	import { getLocale, locales, setLocale } from '$lib/paraglide/runtime.js';

	const flags = { fr: '🇫🇷', en: '🇬🇧' };
</script>

<div role="group">
	{#each locales as locale (locale)}
		<button
			class={getLocale() === locale ? 'primary' : 'outline'}
			aria-current={getLocale() === locale}
			onclick={() => setLocale(locale)}>{flags[locale]}</button
		>
	{/each}
</div>
