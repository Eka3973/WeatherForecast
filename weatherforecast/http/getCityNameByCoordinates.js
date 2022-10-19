import {$api} from "./createInstance";

export const getCityNameByCoordinates = async (lat, long) => {
    return await $api.get(`/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)

}


