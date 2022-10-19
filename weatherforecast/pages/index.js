import {useEffect, useState} from "react";
import {getWeather} from "../http/getWeather";
import MainPage from "../components/MainPage";
import {useRouter} from "next/router";
import {getCityNameByCoordinates} from "../http/getCityNameByCoordinates";
import {usePosition} from "../hooks/usePosition";
import ErrorComponent from "../components/common/ErrorComponent";
import Layout from "../components/Layout";
import {constants} from '../constants/constants'


export default function Home({weatherData}) {
    const router = useRouter()
    const {lat, long, error} = usePosition()
    const [errorCityCoordinates, setErrorCityCoordinates] = useState(error)


    useEffect(() => {
        if (lat && long) {
            getCityNameByCoordinates(lat, long)
                .then(resp => {
                    router.push(`/${resp.data[0].name.split(" ")[0]}`)
                })
                .catch(err => {
                    setErrorCityCoordinates(err.message)
                });
        }

    }, [lat, long, router])


    return (
        <Layout keywords={constants.cities.minsk}>
            <ErrorComponent error={errorCityCoordinates}/>
            <MainPage {...weatherData} />
        </Layout>
    )
}

export async function getStaticProps() {
    const defaultState = {lat: 53.9000000, long: 27.5666700}

    const weatherData = await getWeather(defaultState)

    if (!weatherData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            weatherData,
        },
    }
}