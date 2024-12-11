<script lang="ts">
	import type { PageData } from './$types';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';

	// @ts-expect-errorface
	import image1 from '$lib/assets/image-1.jpg?w=360&h=400&format=webp'; // @ts-expect-error
	import image2 from '$lib/assets/image-2.jpg?w=360&h=400&format=webp'; // @ts-expect-error
	import image3 from '$lib/assets/image-3.jpg?w=360&h=400&format=webp'; // @ts-expect-error
	import image4 from '$lib/assets/image-4.jpg?w=360&h=400&format=webp'; // @ts-expect-error
	import image5 from '$lib/assets/image-5.jpg?w=360&h=400&format=webp';
	import MailIcon from '$lib/assets/logos/mail-icon.svelte';
	import Resume from '$lib/components/Resume.svelte';

	const images = [image1, image2, image3, image4, image5];
	const rotations: string[] = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
</script>

<svelte:head>
	<title>Félix Defrance - Software designer, founder, and amateur astronaut</title>
	<meta
		name="description"
		content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
	/>
</svelte:head>

<Container classStr="mt-9">
	<div class="max-w-2xl">
		<h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			Software designer, founder, and amateur astronaut.
		</h1>
		<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
			I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and
			CEO of Planetaria, where we develop technologies that empower regular people to explore space
			on their own terms.
		</p>
		<div class="mt-6 flex gap-6">
			<a class="group -m-1 p-1" aria-label="Follow on Twitter" href="https://twitter.com">
				<SocialIcons
					Twitter
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a class="group -m-1 p-1" aria-label="Follow on Instagram" href="https://instagram.com">
				<SocialIcons
					Instagram
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a class="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com">
				<SocialIcons
					GitHub
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://linkedin.com">
				<SocialIcons
					LinkedIn
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
		</div>
	</div>
</Container>

<div class="mt-16 sm:mt-20">
	<div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
		<!-- Iterate over the images using Svelte's each block. -->
		{#each images as image, imageIndex (image)}
			<div
				class={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
					rotations[imageIndex % rotations.length]
				}`}
			>
				<img
					src={image}
					alt={`Gallery image ${imageIndex + 1}`}
					sizes="(min-width: 640px) 18rem, 11rem"
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
</div>

<Container classStr="mt-24 md:mt-28">
	<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
		<div class="space-y-10 lg:pl-16 xl:pl-24">
			<!-- Newsletter start -->
			<form
				action="/thank-you"
				class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
			>
				<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
					<MailIcon />
					<span class="ml-3">Stay up to date</span>
				</h2>
				<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
					Get notified when I publish something new, and unsubscribe at any time.
				</p>
				<div class="mt-6 flex">
					<input
						type="email"
						placeholder="Email address"
						aria-label="Email address"
						required
						class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
					/>
					<Button classStr="ml-4 flex-none">Join</Button>
				</div>
			</form>
			<!-- Newsletter end -->
			<Resume />
		</div>
	</div>
</Container>
