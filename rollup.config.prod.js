const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonJs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const {terser} = require('rollup-plugin-terser')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/index.min.js')
const outputEsPath = path.resolve(__dirname, './dist/index.es.min.js')


export default {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'datav',
      globals: {
        vue: 'vue'
      }
    },
    {
      file: outputEsPath,
      format: 'es',
      name: 'datav'
    }
  ],
  plugins: [
    resolve(),
    vue(),
    commonJs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        [
          '@babel/plugin-transform-runtime', {
          regenerator: true
        }
        ]
      ]
    }),
    json(),
    postcss({
      plugins: []
    }),
    terser()
  ],
  external: ['vue']
}
