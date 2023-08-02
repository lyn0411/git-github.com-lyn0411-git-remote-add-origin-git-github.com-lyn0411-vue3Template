<template>
    <div>
        <div style="height: 1920px;width: 100%;background-color: red;"></div>
        <div style="height: 40px;width: 100%;background-color: blue;" ref="inter" class="inter"></div>
    </div>
</template>

<script lang="ts" setup>
import {interObserver} from '@/util/intersectionObserver'
const inter = ref<Element | null>(null)
onMounted(() => {
    interObserver(inter.value!,function(item){
        console.log(item);
        if(item[0].isIntersecting){
            console.log("ddddddddd");
            
        }
    })
})
</script>

<style lang="scss" scoped>

</style>