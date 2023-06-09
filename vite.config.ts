import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import UnpluginAutoImport from 'unplugin-auto-import/vite'
import UnpluginVueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import VueTypeImports from 'vite-plugin-vue-type-imports'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    switch(mode) {
        case 'manual': // 禁用了模块热更新
        {
            return {
                base: './',
                resolve:
                {
                    alias:
                    {
                        '@': path.resolve(__dirname, "./src"),
                    },
                },
                server:
                {
                    hmr: false,
                    host: '0.0.0.0',
                    port: 8080,
                },
                plugins:
                [
                    vue(),
                    UnpluginAutoImport({
                        dts: true,
                        eslintrc: {
                            enabled: true,
                        },
                        resolvers: [ElementPlusResolver()],
                    }),
                    UnpluginVueComponents({
                        resolvers: [ElementPlusResolver()],
                    }),
                    // VueTypeImports(),
                ],
                css:
                {
                    preprocessorOptions:
                    {
                        stylus:
                        {
                            globals:
                            {
                                '_colorset': path.resolve('src/assets/stylesheets/colorset/index.styl'),
                                '_patterns': path.resolve('src/assets/stylesheets/patterns/index.styl'),
                            },
                        },
                    },
                },
            }
        }
        default:
        {
            return {
                base: './',
                resolve:
                {
                    alias:
                    {
                        '@': path.resolve(__dirname, "./src"),
                    },
                },
                server:
                {
                    host: '0.0.0.0',
                    port: 8080,
                },
                plugins:
                [
                    // VueTypeImports(),
                    vue(),
                    UnpluginAutoImport({
                        dts: true,
                        eslintrc: {
                            enabled: true,
                        },
                        imports: [
                            'vue',
                            'vue-router',
                        ],
                        resolvers: [ElementPlusResolver()],
                    }),
                    UnpluginVueComponents({
                        resolvers: [ElementPlusResolver()],
                    }),
                ],
                css:
                {
                    preprocessorOptions:
                    {
                        stylus:
                        {
                            globals:
                            {
                                '_colorset': path.resolve('src/assets/stylesheets/colorset/index.styl'),
                                '_patterns': path.resolve('src/assets/stylesheets/patterns/index.styl'),
                            },
                        },
                    },
                },
                build:
                {
                    outDir: 'docs',
                },
            }
        }
    }
})