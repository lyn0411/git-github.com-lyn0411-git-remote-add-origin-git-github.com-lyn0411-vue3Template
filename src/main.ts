import { createApp } from 'vue'
import pinia from "./stores/store"
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './util/flexble'
import {getAssetsFile} from './util/usePub'
import {Message,MessageBox} from './util/message'
import 'element-plus/es/components/message-box/style/index'
import 'element-plus/es/components/message/style/index'
import mitt, { Emitter } from 'mitt';


const emitter: Emitter<EventBus.Event> = mitt<EventBus.Event>();
declare module "vue" {
    export interface ComponentCustomProperties {
        $getAssetsFile:Function,
    }
}
router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()

})
const app = createApp(App)
app.config.globalProperties.$getAssetsFile = getAssetsFile
app.provide('$getAssetsFile', getAssetsFile)
app.provide('$message', Message)
app.provide('$confirm', MessageBox)
app.provide< Emitter<EventBus.Event>>('$Bus',emitter)
app.use(pinia)
app.use(router)

app.mount('#app')
