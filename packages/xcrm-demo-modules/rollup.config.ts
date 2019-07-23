import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import peerExternal from 'rollup-plugin-peer-deps-external'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import css from 'rollup-plugin-css-only'

const env = process.env.NODE_ENV
const pkg = require('./package.json')
const extensions = [
  '.js', '.jsx', '.ts', '.tsx', '.vue'
]

function createBundleConfig(output) {
  return {
    input: 'src/index.ts',
    output,
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    // external: [],
    watch: {
      include: 'src/**',
    },
    plugins: [
      // Exclude all peer dependencies.
      peerExternal(),
      // Allow json resolution
      json(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve({
        extensions,
        browser: true
      }),
      // Vue SFC compiler
      vue({
        css: false
      }),
      // Bundle css extract files
      css({
        output: 'dist/bundle.css'
      }),
      // Compile TypeScript/JavaScript files
      babel({
        extensions,
        exclude: [/node_modules\/@babel/],
        runtimeHelpers: true
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Set global env.
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      // Compress
      (env === 'production' && terser({ sourcemap: true })),
      // Resolve source maps to the original source
      sourceMaps(),
    ]
  }
}

export default [
  createBundleConfig({ file: pkg.browser, name: 'TestModule', format: 'umd', sourcemap: true }),
  createBundleConfig({ file: pkg.main, format: 'cjs', sourcemap: true }),
  createBundleConfig({ file: pkg.module, format: 'es', sourcemap: true })
]
