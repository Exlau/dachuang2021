import { HOST } from './host'
import req from './request'


export const login = (userInfo) => {
    const path = '/user/login'
    return req({
        method: 'POST',
        url: path,
        data: userInfo
    })
}

export const regis = (userInfo) => {
    const path = '/user/register'
    return req({
        method: 'POST',
        url: path,
        data: userInfo
    })
}