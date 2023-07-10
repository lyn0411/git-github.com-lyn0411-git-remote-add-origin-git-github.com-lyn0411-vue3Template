import { defineStore } from 'pinia'
export const PiniaStore = defineStore('main', ()=>{
	// 保持会话存储位置
	const keepState = reactive({
		count:0,
		increment:()=>{
			keepState.count +=1
		},
	})
	// 临时会话存储位置
	const temporaryState = reactive({
		token:''
	})
	const doubleCount = computed(()=> keepState.count*2 )
	return {keepState,temporaryState,doubleCount} 
},{
		persist: { //  固化插件
			enabled: true, // 开启存储
			strategies: [ // 存储位置 根据数据持久性划分
				{ key:'PiniaSessionStorage',storage: sessionStorage, paths: ['temporaryState']},
	      		{ key:'PiniaLocalStorage',storage: localStorage, paths: ['keepState'] },
			]
		},
})

