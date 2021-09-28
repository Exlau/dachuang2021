import { Toast } from 'antd-mobile';
import axios from 'axios';
import store from '../redux/store'
import { HOST } from './host'

// const HOST = {
//     PROTOCAL: 'http',
//     IP: '139.186.170.86',
//     PORT: '8808',
//     PATH: '/api/v1.0',
//     URL: 'http://139.186.170.86:8808/api/v1.0'
// }

let req = axios.create({
    baseURL: HOST.URL,
    method: 'GET',

})

req.interceptors.request.use(
    config => {
        const token = store.getState().userInfo.TOKEN
        console.log('request拦截器添加的token', token)
        if (token !== '')
            config.headers['Token-Authorization-With'] = token
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

req.interceptors.response.use(
    response => {
        if (response.data.code) {
            switch (response.data.code) {
                case 200:
                    response.data.status = 'OK'
                case 201:
                    response.data.status = 'Created'
                case 401:
                    response.data.status = 'Unauthorized'
                case 403:
                    response.data.status = 'Forbidden'
                case 404:
                    response.data.status = 'Not Found'
            }
        }
        // console.log('response', response)
        return response
    },
    err => {
        // console.log(err.response.status)
        if (err.response.status) {
            switch (err.response.info) {
                case 401:
                    err.response.info = 'Unauthorized'
                case 403:
                    err.response.info = 'Forbidden'
                case 404:
                    err.response.info = 'Not Found'
            }
        }
        // console.log('err res', err.response)
        return Promise.reject(err.response)
    }
)

export default req;