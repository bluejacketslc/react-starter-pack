import { atom } from "recoil";
import { KEY } from "../constants/key";

export const AuthContext = atom({
    default : localStorage.getItem(KEY.AUTH) ? JSON.parse(localStorage.getItem(KEY.AUTH)) : null,
    key : "auth_context"
})