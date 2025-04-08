import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import { terser } from '@rollup/plugin-terser';  // Χρησιμοποιούμε το νέο terser plugin για Rollup 3.x

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: true
      }
    }),
    css({ output: 'bundle.css' }),
    terser()  // Εφαρμόζουμε το terser plugin για την ελαχιστοποίηση του κώδικα
  ],
  watch: {
    clearScreen: false
  }
};
