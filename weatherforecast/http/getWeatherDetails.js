import {$api} from "./createInstance";

export const getWeatherDetails = async ({lat, long}) => {

    return $api.get(`/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then(resp => {
            return resp.data.list.reduce((acc, item) => {

                let key = acc.find(i => {
                    return +new Date(i.date).getDate() === +new Date(item.dt_txt).getDate()
                });

                if (key != null) {
                    key.list.push(item);
                } else {
                    acc.push({date: item.dt_txt, list: [item]});
                }

                return acc;
            }, [])

        })

}