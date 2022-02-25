const svelte = require('rollup-plugin-svelte');
const typescript = require('@rollup/plugin-typescript');
const serve = require('rollup-plugin-serve');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const livereload = require('rollup-plugin-livereload');
const scss = require('rollup-plugin-scss');

const NODE_ENV = process.env.NODE_ENV;
console.log('NODE_ENV', NODE_ENV);

const CONFIG = {
    input: './src/main.ts',
    output: {
        file: './public/dist/bundle.js'
    },
    plugins: [
        nodeResolve(),
        svelte({
            include: './src/**/*.svelte'
        }),
        typescript(),
        scss(),
        NODE_ENV === 'dev' ? serve('public') : null,
        NODE_ENV === 'dev' ? livereload({ watch: 'public' }) : null,
    ]
}

module.exports = CONFIG;