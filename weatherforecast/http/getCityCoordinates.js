import {$api} from "./createInstance";

export const getCityCoordinates = async (cityName) => {

    return await $api.get(`/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then(response => ({
            lat: response.data[0].lat,
            long: response.data[0].lon
        }))

}