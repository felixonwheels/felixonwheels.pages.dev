<script lang="ts">
	import profile from '$lib/assets/profile.webp';
	import Container from '$lib/components/Container.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import BlurFade from '$lib/components/BlurFade.svelte';
	import Mail from 'lucide-svelte/icons/mail';
	import Resume from '$lib/components/Resume.svelte';

	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>Félix Defrance - Software designer, founder, and amateur astronaut</title>
	<meta
		name="description"
		content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
	/>
</svelte:head>

<BlurFade once={true}>
	<Container classStr="mt-16 sm:mt-32">
		<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
			<div class="lg:pl-20">
				<div class="max-w-xs px-2.5 lg:max-w-none">
					<img
						src="/portrait.jpg"
						alt=""
						loading="lazy"
						width="800"
						height="800"
						decoding="async"
						class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
						sizes="(min-width: 1024px) 32rem, 20rem"
						style="color: transparent;"
					/>
				</div>
			</div>
			<div class="lg:order-first lg:row-span-2">
				<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
					I’m Félix Defrance. I live in New York City, where I design the future.
				</h1>
				<div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
					<p>
						I’ve loved making things for as long as I can remember, and wrote my first program when
						I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC
						550 that I taught myself to type on.
					</p>
					<p>
						The only thing I loved more than computers as a kid was space. When I was 8, I climbed
						the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle
						helmet, counted down from three, and jumped — hoping the tree was tall enough that with
						just a bit of momentum I’d be able to get to orbit.
					</p>
					<p>
						I spent the next few summers indoors working on a rocket design, while I recovered from
						the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but
						when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo
						back down to our family computer from space.
					</p>
					<p>
						Today, I’m the founder of Planetaria, where we’re working on civilian space suits and
						manned shuttle kits you can assemble at home so that the next generation of kids really <em
							>can</em
						>{' '}
						make it to orbit — from the comfort of their own backyards.
					</p>
				</div>
			</div>
			<div class="lg:pl-20">
				<ul role="list">
					<li class="flex">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="/about#"
						>
							<SocialIcons
								Twitter
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							/>
							<span class="ml-4">Follow on Twitter</span></a
						>
					</li>
					<li class="mt-4 flex">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="/about#"
						>
							<SocialIcons
								Instagram
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							/>
							<span class="ml-4">Follow on Instagram</span>
						</a>
					</li>
					<li class="mt-4 flex">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="/about#"
						>
							<SocialIcons
								GitHub
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							/>
							<span class="ml-4">Follow on GitHub</span>
						</a>
					</li>
					<li class="mt-4 flex">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="/about#"
							><SocialIcons
								LinkedIn
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							/>
							<span class="ml-4">Follow on LinkedIn</span></a
						>
					</li>
					<li class="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="mailto:spencer@planetaria.tech"
							><SocialIcons
								Mail
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							/>
							<span class="ml-4">spencer@planetaria.tech</span></a
						>
					</li>
				</ul>
			</div>
		</div>

		<Container classStr="mt-24 md:mt-28">
			<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
				<div class="space-y-10 lg:pl-16 xl:pl-24">
					<form
						action="/thank-you"
						class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
					>
						<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
							<Mail />
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
								class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-hidden focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.125] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
							/>
							<Button class="ml-4 flex-none">Join</Button>
						</div>
					</form>
					<Resume />
				</div>
			</div>
		</Container>
	</Container>

	<Container classStr="mt-8">
		<div class="max-w-2xl">
			<a href="/" aria-label="Home" class="mb-4 block h-16 w-16 origin-left">
				<img
					src={profile}
					alt=""
					sizes="4rem"
					class="h-16 w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
				/>
			</a>
			<h1
				class="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
			>
				{m.homeTitle()}
			</h1>
			<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
				I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder
				and CEO of Planetaria, where we develop technologies that empower regular people to explore
				space on their own terms.
			</p>

			<article class="prose prose-base prose-slate lg:prose-lg dark:prose-invert">
				<h4>hello world!</h4>

				<p>I am Félix, a software engineer from France.</p>

				<p>
					I like to create softwares that are sustainable, accessible, useful, fast and lightweight.
				</p>

				<p>
					I currently work at the <b>French National Museum of Natural History</b> (MNHN) where I am
					in charge of redesigning a <i>citizen science</i> mobile app that allow french citizens to
					participate in the french biodiversity inventory.
				</p>

				<p>My ideal tech stacks would be:</p>

				<ul>
					<li>
						for the web
						<ul>
							<li>
								frontend with
								<a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
									>sveltekit</a
								>
							</li>
							<li>
								backend either
								<a href="https://github.com/tokio-rs/axum" target="_blank" rel="noopener noreferrer"
									>axum</a
								>
								(rust) with
								<a
									href="https://github.com/launchbadge/sqlx"
									target="_blank"
									rel="noopener noreferrer">sqlx</a
								>
								and a custom
								<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"
									>postgres</a
								>
								db, or a solution like
								<a href="https://supabase.com/" target="_blank" rel="noopener noreferrer"
									>supabase</a
								>
							</li>
						</ul>
					</li>
					<li>
						for native mobile app
						<ul>
							<li>
								<a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">flutter</a>
								with
								<a href="https://riverpod.dev/" target="_blank" rel="noopener noreferrer"
									>riverpod</a
								>
								and
								<a href="https://isar.dev/" target="_blank" rel="noopener noreferrer">isar</a>
							</li>
						</ul>
					</li>
				</ul>

				<p>
					Besides programming, I enjoy spending time outdoors running all kind of trails, cycling
					long distances, skiing up and down mountains and growing our family vegetable garden.
				</p>

				<p>
					I am quite terrified by the climate crisis, I care about social justice and I am
					fascinated by sustainable mobility.
				</p>

				<span>If you wish to contact me, you can reach me there: </span>

				<ul>
					<li>felixgif at gmail dot com</li>
				</ul>

				<span><i>Fun</i> facts:</span>
				<ul>
					<li>I really love rice</li>
					<li>someday, I want to live in a tiny house deep in the french Alps</li>
					<li>
						I am an
						<a
							href="https://www.16personalities.com/infp-personality"
							target="_blank"
							rel="noopener noreferrer">INFP</a
						>
					</li>
				</ul>

				<blockquote>
					"All that is gold does not glitter,<br />
					Not all those who wander are lost;<br />
					The old that is strong does not wither,<br />
					Deep roots are not reached by the frost."

					<footer>
						<cite>- J.R.R. Tolkien, The Fellowship of the Ring</cite>
					</footer>
				</blockquote>
			</article>
		</div>
	</Container>
</BlurFade>
