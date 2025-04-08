import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

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
    terser()
  ],
  watch: {
    clearScreen: false
  }
};
