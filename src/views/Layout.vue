<template>
    <div class="layout">
        <el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import {PiniaStore} from '@/stores/index'
const store = PiniaStore()
const ddd = ()=>{
    store.keepState.increment()
}
</script>
<style scoped lang="scss">
    .layout{
        width: 100%;
        .el-header{
            height: 90px;
            background-color: #992b2e;
        }
        .el-main{
            padding:0;
            margin: 0;
        }
        .el-footer{
            width: 100%;
            height: 290px;
            background-color: #333534;
        }
    }
</style>
