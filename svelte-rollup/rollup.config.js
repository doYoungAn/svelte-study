const svelte = require('rollup-plugin-svelte');

const CONFIG = {
    input: './src/main.js',
    output: {
        file: './dist/bundle.js'
    },
    plugins: [
        svelte({
            include: './src/**/*.svelte'
        }),
    ]
}

module.exports = CONFIG;