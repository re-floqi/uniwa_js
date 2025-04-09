import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import terser from '@rollup/plugin-terser'; // Προσοχή: Default import, όχι named import
import { nodeResolve } from '@rollup/plugin-node-resolve'; // Απαραίτητο για module resolution
import commonjs from '@rollup/plugin-commonjs'; // Απαραίτητο για CommonJS modules

export default {
  input: 'src/main.js',
  output: {
    sourcemap: process.env.NODE_ENV !== 'production', // Sourcemaps μόνο σε development
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js', // Προτείνεται να χρησιμοποιήσετε υποφάκελο
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: process.env.NODE_ENV !== 'production', // Dev mode μόνο σε development
        // Προσθήκη για TypeScript (αν χρησιμοποιείτε Svelte + TS)
        preprocess: require('svelte-preprocess')()
      }
    }),
    css({ output: 'bundle.css' }),
    nodeResolve({ browser: true }), // Επιλύει node_modules
    commonjs(), // Μετατρέπει CommonJS → ES modules
    terser({ format: { comments: false } }) // Ελαχιστοποίηση κώδικα
  ],
  watch: {
    clearScreen: false
  }
};
