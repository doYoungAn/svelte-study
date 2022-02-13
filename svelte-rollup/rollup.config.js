const svelte = require('rollup-plugin-svelte');
const typescript = require('@rollup/plugin-typescript')

const CONFIG = {
    input: './src/main.ts',
    output: {
        file: './dist/bundle.js'
    },
    plugins: [
        svelte({
            include: './src/**/*.svelte'
        }),
        typescript(),
    ]
}

module.exports = CONFIG;