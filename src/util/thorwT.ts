import {ref} from 'vue'
const timer = ref(true)
const timers = ref<NodeJS.Timeout>()
export const thorwT = (fn:Function,delay=300) => {
    if(timer.value){
        timer.value = false
        timers.value = setTimeout(() => {
            fn()
            clearTimeout(timers.value)
            timer.value = true
        }, delay);
    }
}
const dtimer =  ref<NodeJS.Timeout | null>(null)
export function debounce(fn:Function,delay = 300){
    if(dtimer.value){
        clearTimeout(dtimer.value)
    }
    dtimer.value = setTimeout(()=> {
        fn()
        dtimer.value = null
    },delay)
}