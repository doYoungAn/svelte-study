import { RollupOptions } from 'rollup';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const NODE_ENV = process.env.NODE_ENV;

const CONFIG: RollupOptions = {
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
        NODE_ENV === 'prod' ? terser() : null,
        copy({
            targets: [
                { src: 'static/**', dest: 'public/static' }
            ]
        })
    ]
}

export default CONFIG;