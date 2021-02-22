import { _axios } from "../_axios"

export const Login = async ({ username, password }) => {
    //dummy purpose
    const { data } = await _axios.post("/dummy/login", { username, password })
    return data;
}