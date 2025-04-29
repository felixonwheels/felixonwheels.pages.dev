import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({ project: './project.inlang', outdir: './src/paraglide' }),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			disableAsyncLocalStorage: true,
			urlPatterns: [
				{
					pattern: '/resume',
					localized: [
						['en', '/en/resume'],
						['fr', '/fr/cv']
					]
				},
				{
					pattern: '/projects',
					localized: [
						['en', '/en/projects'],
						['fr', '/fr/projets']
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['fr', '/fr/:path(.*)?']
					]
				}
			]
		}),
		imagetools(),
		mkcert(),
		tailwindcss()
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
