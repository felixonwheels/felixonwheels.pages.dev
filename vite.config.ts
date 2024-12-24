import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';
import mkcert from 'vite-plugin-mkcert';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		imagetools(),
		mkcert()
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
