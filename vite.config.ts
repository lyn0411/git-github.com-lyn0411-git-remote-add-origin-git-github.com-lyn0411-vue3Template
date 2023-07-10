import { defineConfig ,loadEnv } from 'vite'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import alias from './vite/alias'
import Icons from 'unplugin-icons/vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode })=>{
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))
  const ipAddress = 'http://47.108.20.243/'
  return{
    plugins: [...setupPlugins(isBuild, env),
       Icons({
        autoInstall: true,
      })
    ],
    resolve: {
      alias,
    },
    base:isBuild?'./':'/',
    build: {
      //编译文件生成目录
      // target:'es2020',
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input:{
          index:resolve(__dirname,'index.html'),
          viewer:resolve(__dirname,'public/viewer.html')
        },
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.split('/node_modules/').pop()?.split('/')[0]
            }
          },
        },
      },
    },
    server:{
      host: true,
      port: 9006,
      // proxy:{
      //     '/api':{
      //         target:'http://192.168.1.102:9892',//接口地址
      //         changeOrigin: true,
      //         ws: true,
      //         pathRewrite: { // 路径重写，
      //             '^/api': '/api' ,//将api替换为api
      //         }
      //     }
      // }
      proxy: {
        '/guji/portal': {
          target: ipAddress,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/guji/, "")
        },
        '/admin': {
          target: ipAddress,
          ws: true,
          changeOrigin: true
        },
        '/bookOcr': {
          target: ipAddress,
          ws: true,
          changeOrigin: true
        },
        '/medias': {
          target: ipAddress,
          ws: true,
          changeOrigin: true,
        },
        '/banner': {
          target:ipAddress,
          ws: true,
          changeOrigin: true
        },
        '/api': {
          target: ipAddress,
          ws: true,
          changeOrigin: true
        },
        '/fileBookWeb': {
          target: ipAddress,
          ws: true,
          changeOrigin: true
        },
     }
    },
  }
})
