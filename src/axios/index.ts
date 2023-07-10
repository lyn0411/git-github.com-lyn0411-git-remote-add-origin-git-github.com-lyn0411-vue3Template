import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
type Response<T = any> = {
  // 描述
  code:number
  message:string
  // 返回的数据
  data?: T
}
const instance = axios.create({
  baseURL: '/',
  timeout: 5000,
})
export const request = <T> (config: AxiosRequestConfig) => {
  return new Promise<Response<T>>((resolve, reject) => {
    instance.request<Response<T>>(config).then((response: AxiosResponse<Response<T>>) => {
      resolve(response.data)
    }).catch((error :any) => {
      reject(error)
    })
  })
}

export default request
