import { HOST } from './host'
import req from './request'

const path = '/user/login'

export const login = (userInfo) => {
    return req({
        method: 'POST',
        url: path,
        data: userInfo
    })
}