import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import fs from "fs";
import { defineConfig, loadEnv, ConfigEnv } from "vite";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

const pathResolve = (dir: string) => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("./src/"),
  "@": pathResolve("./src/"),
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
  three: resolve(__dirname, "node_modules/three"),
};

// https://vite.dev/config/
const ip = "http://123.57.26.173:6001";

const viteConfig = defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [
      vue(),
      vueSetupExtend(),
      // vitePluginRequire(),
      // AutoImport({
      // 	resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      // 	resolvers: [ElementPlusResolver()],
      // }),
      // requireTransform({
      // 	fileRegex: /.js$|.vue$/
      // })
    ],
    rules: [
      // 配置将px转为rem的插件
      // {
      // 	loader: 'px2rem-loader',
      // 	options: {
      // 		// 1rem等于75px,适用于750px视觉稿
      // 		remUnit: 75,
      // 		// px转成rem后小数点的位数
      // 		remPrecision: 8,
      // 	},
      // },
    ],
    root: process.cwd(),
    resolve: { alias, globDirs: ["src/plugins"] },
    base: mode.command === "serve" ? "./" : env.VITE_PUBLIC_PATH,
    optimizeDeps: {
      include: [
        "element-plus/es/locale/lang/en",
        "element-plus/es/locale/lang/zh-cn",
        "element-plus/es/locale/lang/zh-tw",
      ],
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_PORT as unknown as number,
      open: JSON.parse(env.VITE_OPEN),
      https: false,
      hotOnly: false,
      hmr: true,
      proxy: {
        "/v1": {
          target: ip,
          changeOrigin: true,
          pathRewrite: { "^/v1": "/v1" },
        },
      },
    },
    build: {
      // 在构建前执行版本号脚本
      // onWrite: process.env.NODE_ENV === 'production' && updateVersion(),
      sourcemap: true,
      outDir: "dist",
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: `assets/[name].[hash].js`,
          assetFileNames: `assets/[name].[hash].[ext]`,
          compact: true,
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            // echarts: ['echarts'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: { css: { charset: false } },
      postcss: {
        plugins: [],
      },
    },
    // define: {
    // 	__VUE_I18N_LEGACY_API__: JSON.stringify(false),
    // 	__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
    // 	__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
    // 	__NEXT_VERSION__: JSON.stringify(process.env.npm_package_version),
    // 	__NEXT_NAME__: JSON.stringify(process.env.npm_package_name),
    // },
  };
});

export default viteConfig;

// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
