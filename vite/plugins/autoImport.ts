import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

//自动导入插件
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle:'sass'
      }), 
        IconsResolver({
          prefix: 'Icon',
        })
      ],
      //定义element-plus api按需加载
      imports: ['vue', 'vue-router'],
      //composables目录文件按需加载
      dirs: ['src/composables'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        //element-plus组件按需导入
        ElementPlusResolver({
          importStyle:'sass'
        }),
        VueUseComponentsResolver(),
        //针对iconpark图标按需导入
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      extensions: ['vue', 'tsx'],
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'types/components.d.ts',
    }),
  )
}
