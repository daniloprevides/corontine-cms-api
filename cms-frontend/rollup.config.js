import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import autoPreprocess from 'svelte-preprocess';
import css from "rollup-plugin-css-only";


const production = !process.env.ROLLUP_WATCH;
const env = process.env.NODE_ENV || "development";

const config = {
	development : {
		apiUrl: "http://localhost:3000"
	},
	stage : {
		apiUrl: "http://localhost:3000"
	},
	production : {
		apiUrl: "http://localhost:3000"
	}
}


export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		
		replace({
			// 2 level deep object should be stringify
			process: JSON.stringify({
			  env: config[env]
			}),
		}),
		css({ output: "public/build/extra.css"}),
		svelte({
			preprocess: autoPreprocess({
				typescript: {
					/**
					 * Optionally specify the full path to the tsconfig
					 */
					//tsconfigFile: './tsconfig.app.json',
				
					/**
					 * Optionally specify compiler options.
					 * These will be merged with options from the tsconfig if found.
					 */
					compilerOptions: {
					  module: 'es2015',
					},
				
					/**
					 * Type checking can be skipped by setting 'transpileOnly: true'.
					 * This speeds up your build process.
					 */
					transpileOnly: true,
				},
			}),
			// enable run-time checks when not in production

			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css');
			},

		}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte', 'svelte/transition', 'svelte/internal']
		}),
		commonjs({
			
		}),
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
