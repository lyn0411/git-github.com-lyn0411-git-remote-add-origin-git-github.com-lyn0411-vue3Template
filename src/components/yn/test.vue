<template>
    <div  class="text">
        <div >
             {{ msg }}
        </div>
        <div>
            <el-button type="primary" size="default" @click="emitClick">我是emit</el-button>
        </div>
        <slot name="title" :data="datas"></slot>
        <el-input v-model="inputWatch" ></el-input>
    </div>
</template>

<script lang="ts" setup>
// prop 通信
const prop = defineProps({
    msg:String
})
// emit 通信
const emit = defineEmits(['content'])
const emitClick = ()=>{
    emit('content','我是emit 我通知父组件改变prop了哟')
}
const datas = ref('我是具名插槽')

// watch 计算属性
const inputWatch = ref('')
// 简单类型监听
watch(inputWatch,(newIn,oldIn)=>{
    console.log(newIn,oldIn);
})
const quest = reactive({
    body:1,
    juns:2
})
// 复杂类型监听
watch(()=>quest.body,(newIn,oldIn)=>{
    console.log(newIn,oldIn);
    
})

</script>

<style lang="scss" scoped>
    .text{
        display: block;
        div{
            margin: 10px;
        }
    }
</style>