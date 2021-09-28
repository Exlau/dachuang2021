import { SET_TOKEN } from "../constants"
import { SET_USER } from '../constants'

export const setToken = data => ({ type: SET_TOKEN, data })
export const setUser = data => ({ type: SET_USER, data })