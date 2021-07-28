import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';

export default {
  input: 'custom-uploader.js',
  output: {
    file: 'custom-uploader.bundled.js',
    format: 'esm',
  },
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
  ]
};
