import axios from 'axios'
import { HOST } from './host'
import store from '../redux/store'


const path = '/file/upload/'

const FILE_TYPE = {
    AVATAR: '1',
    POST_IMG: '2',
    COMMENT_IMG: '3'
}

let req = axios.create({
    baseURL: HOST.URL,
    method: 'POST',
    headers: {
        'Token-Authorization-With': store.getState().userInfo.TOKEN,
        'Content-Type': 'multipart/form-data'
    }
})

export const upLoadAvatar = (userID, formData) => {
    console.log('form data from upload', formData)
    return req({
        url: path + FILE_TYPE.AVATAR + '/' + userID,
        data: formData
    })
}