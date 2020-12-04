const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonJs = require('rollup-plugin-commonjs')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/index.umd.js')
const outputEsPath = path.resolve(__dirname, './dist/index.es.js')


export default {
    input: inputPath,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'datav'
        },
        {
            file: outputEsPath,
            format: 'es',
            name: 'datav'
        }
    ],
    plugins: [
        resolve(),
        commonJs()
    ],
    external: ['vue']
}