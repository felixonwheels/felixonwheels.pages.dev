<script lang="ts">
	import SunIcon from '$lib/assets/logos/sun-icon.svelte';
	import MoonIcon from '$lib/assets/logos/moon-icon.svelte';

	function toggleMode() {
		let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		let isSystemDarkMode = darkModeMediaQuery.matches;
		let isDarkMode = document.documentElement.classList.toggle('dark');

		// if (isDarkMode === isSystemDarkMode) {
		// 	delete window.localStorage.isDarkMode;
		// } else {
		// 	window.localStorage.isDarkMode = isDarkMode;
		// }
	}
</script>

<button
	type="button"
	aria-label="Toggle dark mode"
	class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
	on:click={toggleMode}
>
	<SunIcon />
	<MoonIcon />
</button>
