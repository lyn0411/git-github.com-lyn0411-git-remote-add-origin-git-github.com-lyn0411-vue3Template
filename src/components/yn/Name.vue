<template>
    <div class="names" ref="names">
        <div class="name" ref="name">
            <div class="name-item" v-for="(name, index) in group" :key="index">{{ name }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { setStyle } from '@/hooks/has-style';
const props = withDefaults(defineProps<{
    group:string[],
    duration:number
}>(),{})


const names = ref<HTMLElement>()
const name = ref<HTMLElement>()
const height = ref<number>()
const init = () => {
    return new Promise<string>((resolve, reject) => {
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const nameItem = name.value?.querySelectorAll('.name-item')
        const rect = nameItem![0]?.getBoundingClientRect()
        height.value = rect.height
        setStyle(names.value!,'max-height',rect?.height! * 10 / fontSize + 'rem')
        // 复制前十个名字dom
        const firstCopy = Array.from(nameItem!).slice(0,10)
        firstCopy.forEach(item => {
            const last = item?.cloneNode(true)
            name.value?.appendChild(last!.cloneNode(true))
        })
        resolve( rect?.height! * 10 / fontSize + 'rem')
    })
}

const nameAnimation = ref<Animation>()
const anmation = (heights:string,duration:number) => {
    const runList = [
        {
            transform:`translateY(0px)`
        },
        {
            transform:`translateY(calc(-100% + ${heights}))`
        }
    ]
    nameAnimation.value = name.value?.animate(runList,{
        duration: duration,
        fill: 'forwards',
    })
    nameAnimation.value!.onfinish = () => {
        nameAnimation.value?.cancel()
        nameAnimation.value?.play()
    }
    nameAnimation.value?.pause()
}
const start = () => {
    // nameAnimation.value!.playbackRate = 1
    // nameAnimation.value!.startTime = 0
    setStyle(name.value!,'filter','blur(0px)')
    const v = 35 * height.value! / 1000
    const t = props.duration * height.value! / v
    duration.value = t
    anmation(heights.value,t)
    nameAnimation.value?.play()
}

const resize = () => {
    const namesTop = names.value?.getBoundingClientRect().top!
    const nameTop = name.value?.getBoundingClientRect().top!
    if(Math.floor((namesTop - nameTop) / height.value!) === (namesTop - nameTop) / height.value!){
        
    }else{
        // 将动画停在指定位置
        nameAnimation.value?.pause()
        const durations = Math.max(0,Math.floor((namesTop - nameTop) / height.value!))

        const runList = [
            {
                transform:`translateY(${-height.value! * durations - 1}px)`
            },
            {
                transform:`translateY(${-height.value! * durations}px)`
            }
        ]
        nameAnimation.value = name.value?.animate(runList,{
            duration: duration.value,
            fill: 'forwards',
        })
        nameAnimation.value!.finished
    }
}
const pause = () => {
    resize()
}
let duration = ref(0)
const heights = ref('')
onMounted(async() => {
    heights.value =  await init() 
    
})

defineExpose({start,pause})

</script>
  
  
<style lang="scss" scoped>
.names{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    text-align: center;
    overflow-y: hidden;

    .name{
        filter: blur(5px);
        
        .name-item{
            height: 25px;
            line-height: 25px;
            letter-spacing: 7px;
            font-size: 22px;
            // padding: 5px;
            // font-family: 'KAiti';
        }
    }
   
}
            
</style>