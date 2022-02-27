const CONFIG = {
    mount: {
        public: '/',
        src: '/dist',
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