import Axios from 'axios'
import { KEY } from './constants/key'

export const _axios = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

_axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem(KEY.AUTH)
        if (token)
            config.headers['Authorization'] = `Bearer ${token}`
        return config;
    }, err => err
)