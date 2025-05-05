<script lang="ts">
	import English from '$lib/components/English.svelte';
	import French from '$lib/components/French.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime.js';

	const RenderedComponent = { fr: French, en: English }[getLocale()];
</script>

<svelte:head>
	<title>Félix Defrance</title>
	<meta name="description" content={m.metaDescription()} />
</svelte:head>

<section>
	<RenderedComponent />
</section>
