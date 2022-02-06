const CONFIG = {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-optimize',
    ],
}

module.exports = CONFIG;