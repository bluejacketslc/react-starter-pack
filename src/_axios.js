import Axios from 'axios'

export const _axios = Axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
})