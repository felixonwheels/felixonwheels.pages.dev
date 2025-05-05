<script lang="ts">
	import profile from '$lib/assets/profile.webp';

	import LanguageSelector from './LanguageSelector.svelte';
</script>

<nav>
	<ul>
		<li><img src={profile} alt="félix defrance profile" /></li>
	</ul>
	<ul>
		<li><LanguageSelector /></li>
	</ul>
</nav>

<style>
	img {
		border-radius: 4rem;
		width: 10vh;
		height: 10vh;
		object-fit: cover;
	}

	nav {
		align-items: flex-end;
	}
</style>
