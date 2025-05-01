import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: {
        "ex-button": resolve(__dirname, "packages/ex-button/index.ts"),
        "ex-header": resolve(__dirname, "packages/ex-header/index.ts"),
      },
      name: 'ex-components',
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name]/[name].[format].js"
      },
    }
  }
});
