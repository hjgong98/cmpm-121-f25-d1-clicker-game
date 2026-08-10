// https://vitejs.dev/config/
export default {
  base: "./",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext",
    outDir: "docs",
    sourcemap: true,
  },
};
