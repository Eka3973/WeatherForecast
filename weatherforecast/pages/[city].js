import {getCityCoordinates} from "../http/getCityCoordinates";
import {getWeather} from "../http/getWeather";
import MainPage from "../components/MainPage";
import Layout from "../components/Layout";
import {useRouter} from "next/router";

const CityWeather = ({weatherData}) => {
    const {query} = useRouter()

    return (
        <Layout keywords={query.city}>
            <MainPage {...weatherData}/>
        </Layout>

    )
}
export default CityWeather

export async function getServerSideProps({params}) {

    const cityParams = await getCityCoordinates(params.city)
    const weatherData = cityParams && await getWeather(cityParams)


    if (!weatherData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            weatherData
        }

    }
}