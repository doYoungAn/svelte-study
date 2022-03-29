import esbuild from 'esbuild';
import sveltePlugin from "esbuild-svelte";

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [sveltePlugin()],
    logLevel: "info",
  })
  .catch(() => process.exit(1));