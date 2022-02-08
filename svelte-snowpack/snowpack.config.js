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
    ],
}

module.exports = CONFIG;