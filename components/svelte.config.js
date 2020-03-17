const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
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
};