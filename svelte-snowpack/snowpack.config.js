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
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-optimize',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
    ],
}

module.exports = CONFIG;