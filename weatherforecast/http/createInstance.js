import axios from "axios";

export const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.NEXT_PUBLIC_API_URL,

})