<template>
    <canvas ref="myCanvas" width="900" height="900"></canvas>
</template>

<script lang="ts" setup>
interface position{
    x:number
    y:number
}
const props = defineProps({
    imgUrl:{
        type:String,
        required:true,
    },
})
// canvas ref
const myCanvas = ref<HTMLCanvasElement | null>(null)
const ctx = ref();
const canvasInit = () => {
    ctx.value = myCanvas.value!.getContext('2d')
    loadImg()
    convasEventInit()
}
const clearRect =() => {
    ctx.value.clearRect(0,0,myCanvas.value!.width,myCanvas.value!.height)
}
const drawImages = () => {
    clearRect()
    ctx.value.drawImage(
        img.value,
        0,0,
        img.value!.width,img.value!.height,
        imgX.value, imgY.value,
        myCanvas.value!.width*imgScale.value,
        myCanvas.value!.height*imgScale.value
    )
}
const flag = ref(false)
const positionOld = ref<position>({ x:0, y:0 })
const positionNew = ref<position>({ x:0, y:0 })
const convasEventInit = () => {
    myCanvas.value!.onmousedown = (e:MouseEvent) => {
        flag.value = true
        positionOld.value = windowToCanvas(e.clientX,e.clientY)
    }
    myCanvas.value!.onmousemove = (e:MouseEvent) => {
        if(flag.value){
            positionNew.value = windowToCanvas(e.clientX,e.clientY)
            const x = positionNew.value.x - positionOld.value.x;
            const y = positionNew.value.y - positionOld.value.y;
            imgX.value += x;
            imgY.value += y;
            positionOld.value = JSON.parse(JSON.stringify(positionNew.value));
            drawImages()
        }
    }
    myCanvas.value!.onmouseup  = function () {
        flag.value = false;
    }
    myCanvas.value!.onwheel = (event:WheelEvent) => {
        const pos = windowToCanvas(event.clientX, event.clientY);
        const newPos = {x: parseInt(((pos.x - imgX.value) / imgScale.value).toFixed(2)), y:parseInt(((pos.y - imgY.value) / imgScale.value).toFixed(2))};
        if (event.deltaY < 0) {
            imgScale.value += 0.05
            imgX.value = (1 - imgScale.value) * newPos.x + (pos.x - newPos.x)
            imgY.value = (1 - imgScale.value) * newPos.y + (pos.y - newPos.y)
         
        } else {//  缩小
            imgScale.value -= 0.05;
            if (imgScale.value < MINIMUM_SCALE) {
               imgScale.value = MINIMUM_SCALE;
            }
            imgX.value = (1 - imgScale.value) * newPos.x + (pos.x - newPos.x);
            imgY.value = (1 - imgScale.value) * newPos.y + (pos.y - newPos.y);
        }
        drawImages()
        event.preventDefault()
    }

}
 // 将窗口坐标转换为canvas坐标
const windowToCanvas =(x:number, y:number) => {
    const box= myCanvas.value!.getBoundingClientRect()
    return {
        x: x - box.left - (box.width - myCanvas.value!.width) / 2,
        y: y - box.top - (box.height - myCanvas.value!.height) / 2
    };
}
// img
const img = ref<HTMLImageElement | null>()
const imgX = ref(0)
const imgY = ref(0)
const imgScale = ref(1)
const MINIMUM_SCALE = 0.2

const loadImg = () => {
    img.value = new Image()
    img.value.src = props.imgUrl
    img.value.onload = () => {
        drawImages()
    }
}
const emit = defineEmits([])
onMounted(() => {
    canvasInit()
})
</script>

<style lang="scss" scoped>
canvas{
    background-color: rgba(243, 243, 243, 0.5);
}
</style>