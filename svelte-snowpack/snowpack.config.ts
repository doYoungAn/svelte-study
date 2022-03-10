const NODE_ENV = process.env.NODE_ENV;

const CONFIG = {
    mount: {
        public: '/',
        src: '/dist',
        static: {
            url: '/static',
            static: true,
            resolve: false,
        },
    },
    optimize: {
        bundle: NODE_ENV === 'prod',
        minify: NODE_ENV === 'prod',
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-optimize',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
    ],
}

module.exports = CONFIG;