<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import CodeXml from 'lucide-svelte/icons/code-xml';
	import Heart from 'lucide-svelte/icons/heart';
</script>

<section>
	<footer>
		<span
			><a
				href="https://github.com/felixonwheels/felixonwheels.pages.dev"
				target="_blank"
				rel="noopener noreferrer"><CodeXml size={20} /></a
			>
			{m.footerWith()}
			<Heart size={18} style="color: #D93526" />
			{m.footerBy()}</span
		>

		<br />
		<br />
	</footer>
</section>

<style>
	footer {
		text-align: center;
	}
</style>
