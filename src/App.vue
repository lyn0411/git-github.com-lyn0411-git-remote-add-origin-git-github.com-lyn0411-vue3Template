<template>
  <el-config-provider :locale="locale">
      <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
    import { ElConfigProvider } from 'element-plus'
    import zhCn from 'element-plus/lib/locale/lang/zh-cn'
    import { PiniaStore } from '@/stores/index'
    const locale = ref(zhCn)
    const store = PiniaStore()
    // watch(() =>router.currentRoute.value.name,(newValue,oldValue)=> {
    //   console.log(newValue);
    //   // if(newValue.meta.keepAlive && includeList.indexOf(newValue.name) === -1){
    //   //   includeList.push(to.name);
    //   // }
    // },{ immediate: true })

    

</script>

<style lang="scss">

// html,body,#app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: hsl(210, 29%, 24%);
//   height: 100%;
//   font-size: 16px;
//   // overflow: hidden;
// }
</style>
