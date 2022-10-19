import {$api} from "./createInstance";

export const getWeather = ({lat, long}) => {

    return Promise.all([
        $api.get(`/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`),
        $api.get(`/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
    ]).then(response => {

        const forecastWeather = response[1].data.list.filter(day => {
            const forecastDay = new Date(day.dt_txt).getDate()
            const currentDay = new Date().getDate()
            const getHours = new Date(day.dt_txt).getHours()

            return (currentDay < forecastDay) && (getHours === 15)

        })

        return {
            currentWeather: response[0].data,
            forecastWeather
        }

    })
}

