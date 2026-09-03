import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    singleQuote: false,
    semi: true,
    printWidth: 80,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    cache: true,
  },
});
