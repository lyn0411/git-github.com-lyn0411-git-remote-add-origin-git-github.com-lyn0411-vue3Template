import {request} from '@/axios/index'
type Imglog = {
    userName:string,
    password:string,
    moveLength:number
}
// 登录
export function loginByImg(params:Imglog) {
    return request({
        url: '/portal/reader/loginByImg',
        method: 'post',
        params: params,
    })
}
// 图片验证码
export function getImageVerifyCode() {
    return request({
        url: '/portal/verify/getImageVerifyCode',
        method: 'post',
    })
}