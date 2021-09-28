import { SET_TOKEN } from '../constants'
import { SET_USER } from '../constants'

let initState = {
    TOKEN: '',
    userName: '',
    userId: ''
};

export default function userReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case SET_TOKEN:
            return { ...preState, TOKEN: data }
        case SET_USER:
            return { ...preState, ...data }
        default:
            return preState
    }
}