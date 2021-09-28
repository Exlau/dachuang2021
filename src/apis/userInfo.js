import req from './request'
import store from '../redux/store'

const path = '/user/list/'

// 这里自己寻找userID
export const getUserInfo = (userID) => {
    return req({
        method: 'GET',
        url: path + userID
    })
}

export const getFollowList = (userID) => {

}

