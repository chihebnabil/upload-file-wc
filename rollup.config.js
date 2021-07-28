 import babel from 'rollup-plugin-babel';
 import commonjs from 'rollup-plugin-commonjs';
 import resolve from '@rollup/plugin-node-resolve';
 import { terser } from 'rollup-plugin-terser';
 import filesize from 'rollup-plugin-filesize';
 import minifyHTML from 'rollup-plugin-minify-html-literals';
 import copy from 'rollup-plugin-copy';
 

 
 const filesizeConfig = {
   showGzippedSize: true,
   showBrotliSize: false,
   showMinifiedSize: false,
 };
 
 const copyConfig = {
   targets: [
     { src: 'node_modules/@webcomponents', dest: 'build-universal/node_modules' },
     { src: 'node_modules/systemjs/dist/s.min.js', dest: 'build-universal/node_modules/systemjs/dist' },
     { src: 'images', dest: 'build-universal' },
     { src: 'data', dest: 'build-universal' },
     { src: 'index-universal.html', dest: 'build-universal', rename: 'index.html' },
   ],
 };
 
 const configs = [
   // The main JavaScript bundle for older browsers that don't support
   // JavaScript modules or ES2015+.
   {
     input: ['custom-uploader.js'],
     output: {
       dir: 'build',
     },
     plugins: [
       minifyHTML(),
       resolve(),
       copy(copyConfig),
     ],
     preserveEntrySignatures: false,
   },
   // Babel polyfills for older browsers that don't support ES2015+.
   {
     input: 'babel-polyfills-nomodule.js',
     output: {
       file: 'build-universal/nomodule/src/babel-polyfills-nomodule.js',
       format: 'iife',
     },
     plugins: [commonjs({ include: ['node_modules/**'] }), resolve()],
   },
 ];
 
 for (const config of configs) {
   if (process.env.NODE_ENV !== 'development') {
     config.plugins.push(terser());
   }
   config.plugins.push(filesize(filesizeConfig));
 }
 
 export default configs;