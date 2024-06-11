<template>
    <div class="layout" v-if="home">
        <div class="box">
            <div class="box-item" v-for="(group, index) in groups" :key="index">
                <el-image class="image" :src="getAssetsFile('index','fs','webp')" fit="fill" ></el-image>
                <div class="fenlei">第{{ index + 1}}组</div>
                <yn-name :duration="text[index]" :group="group" :ref="(el) => setRef(el,index)" v-if="group.length != 0"></yn-name>
            </div>
        </div>
        <div class="btn">
            <div class="title" @click="opens">{{ !start ? '开始分组' : '确定分组' }}</div>
        </div>
    </div>
    <div class="layout" v-else>
        <div class="title" @click="home = !home">点击分组</div>
    </div>
</template>
<script setup lang="ts">
import {getAssetsFile} from '@/util/usePub'
import { ComponentPublicInstance } from 'vue'

let names = [
    "代祖嫣","代祖源","敖瑞妍","赵睿捷","郭宸瑄",
    "崔歆悦","郑筠洁","丁文哲","郭瑾瑜","雷相宜","何林谦","邹渝晨",
    "吴思颖","张雅琪","范嘉麟","周星邑",
    "邓媛元","张倚梦","邓茹尹","史钰彤","冉梓萱",
    "侯欣林","夏小雯","孙闻天","张籽桐","傅琳月","曹跃然","袁新杰",
    "冯思宇濠","蒋承峻","李瑾萱","牟芷菡",
    "任俊霖","王越","刘钰浠","陆珈雪","邹雨舟","郑力心","胡誉瀚",
    "殷若丹","王雪峰","谢昀蒨",
    "钱煜霖","吴梓卉","王岚","乔煜程","陈艺馨",
    "张桐硕","丁森画","于佩彣","寇语瞳","柯雨萱","张宝心","蒋东洁",
    "寇子泰",
    "吴煊琪","余研秋","邹忻童","王麒雅","陈涵梓曦","王雅萱",
    "李妍颖","张袁元","赵紫仪","刘星彤","林辰曦",
    "刘艾琳","王欣玥","谷雅岚","张𬭸支","向珈萱","周津羽","崔珍瑞",
    "陈星余","沈阅涵",
    "周梦莎","胡严尹","蒋雨馨","周思静","童诗琪","李心悦","李心妤",
    "唐艺烜",
    "谭灵萱","佘梦冰","周艺","孟良惜","李佳益","舒寿梅","牟栖汶",
    "吴雨罄","陈钰薇","卿闪睿","陈梓妍","刘语彤","黎思言",
    "陈美希","王可馨","冯梓煊","胡家懿","沈梦妍歆","李梓涵",
    "莫佳曦","叶紫萱",
    "杜芊羽","周芷莹","郑舒月","徐梓萱","庹小淇","周林轩","徐玮月",
    "张淳雅","温语冉","郭思淇","周芸伊","温语欣","袁宸妤",
    "王薏澄","叶青丞","王思懿","张静妤","杨雨纯","赵舒垚",
    "袁艺芯","罗楚涵","王瑜菲",
    "高韵寒","胡馨月","周奕曦","周奕涵","陶子歌","陈思牟","张贤懿",
    "曹梓涵","谭梦涵","杨佳瑶","杨梓萱","郑雨萱","熊雨菡","狄上琪",
    "张珈奕","向芷妍","刘羽菲","刘恒语","李汶轩","许莺馨",
    "唐伊一","唐可芯","周虹妤","胡凯迪","苟彧豪","李皓轩","李彦霖",
    "张诺屹","唐崧耀","彭娅楠","王梣磊","何书菡","张桓","杨心睿",
    "王妍之","罗雅真","欧阳佳玥","沈紫筠","任梓诚","任凌瑶","陈汐蓓",
    "王子萱","王子芙"
]

const home = ref(false)
const groups = ref<string[][]>([])
// const dd = 1000 + 1000 * (1/ (1000 / 35 * 34)) - 0.4
const text = ref<number[]>([
    35,35,35,35,34
])

const shuffleArray = (array:string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const init  = () => {
    const names1 = JSON.parse(JSON.stringify(names))
    shuffleArray(names1)
    for (let i = 0; i < 5; i++) {
        const groupSize = Math.ceil(names1.length / (5 - i));
        const group = names1.splice(0, groupSize);
        groups.value.push(group);
    }

    
}
const start = ref(false)
const namesRef = ref<Element[] | ComponentPublicInstance[] | null[]>([]);
const setRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    namesRef.value[index] = el;
}
const opens = () => {
    start.value = !start.value
    namesRef.value.forEach((e:any) => {
        setTimeout(()=> {
            if(start.value){
                e.start()
            }else{
                e.pause()
            }
        },0)
    })
}
let tid:NodeJS.Timeout | null = null
const resize = () => {
    groups.value = []
    setTimeout(() => {
        init()
    ,2000})
}
onMounted(() => {
    init()
    window.addEventListener('resize', async function(){
        clearTimeout(tid!);
        tid = setTimeout(resize, 300);
    })
})
</script>
  
  
<style lang="scss" scoped>
  .layout{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: url('@/assets/images/index/bg.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title{
        font-size: 40px;
        letter-spacing: 12px;
        position: absolute;
        font-size: 60px;
        -webkit-text-stroke: 1px #ccc;
        background:  url('@/assets/images/index/bg.png') no-repeat center/cover;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
        bottom: 120px;
    }
    .box{
        width: 100%;
        box-sizing: border-box;
        padding: 0 100px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        .box-item{
            width: 100%;
            position: relative;
            .fenlei{
                position: absolute;
                font-size: 20px;
                color: black;
                left: 50%;
                top: 20%;
                transform: translate(-50%,-50%);
            }
            .el-image{
                width: 350px;
            }
            // .names{
            //     width: 100%;
            //     height: 100%;
            //     position: absolute;
            //     top: 50%;
            //     left: 50%;
            //     transform: translate(-50%,-50%);
            //     text-align: center;
            //     overflow-y: hidden;
            //     .name{
            //         .name-item{
            //             letter-spacing: 7px;
            //             font-weight: bold;
            //             font-size: 18px;
            //             padding: 5px;
            //         }
            //     }
            // }
            
        }
    }
    .btn{
        position: absolute;
        bottom: 0px;
        width: 300px;
        .title{
            font-size: 40px;
            letter-spacing: 12px;
            position: absolute;
            font-size: 60px;
            -webkit-text-stroke: 1px #ccc;
            background:  url('@/assets/images/index/bg.png') no-repeat center/cover;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            cursor: pointer;
            bottom: 120px;
        }
    }
}
</style>

