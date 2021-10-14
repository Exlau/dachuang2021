import req from './request'
import store from '../redux/store'


// 这里自己寻找userID
export const getUserInfo = (userID) => {
    const path = '/user/list/'
    return req({
        method: 'GET',
        url: path + userID
    })
}

export const getFollowList = (userID) => {

}

export const updateUserInfo = (data) => {
    const path = '/user/update'
    return req({
        method: 'post',
        url: path,
        data
    })
}

