import {getCityCoordinates} from "../http/getCityCoordinates";
import styles from "../styles/CityWeather.module.scss";
import {getWeekDay} from "../helpers/getWeekDay";
import {constants} from "../constants/constants";
import {WeatherParameters} from "../components/common/WeatherParameters";
import {getWeatherDetails} from "../http/getWeatherDetails";
import {useRouter} from "next/router";
import FormBlock from "../components/Form";
import {formatDate} from "../helpers/formatDate";
import {formatTime} from "../helpers/formatTime";
import IconComponent from "../components/common/IconComponent";
import Layout from "../components/Layout";

const CityWeather = ({weatherData}) => {
    const {query} = useRouter()

    return (
        <Layout keywords={query.city[1]}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{`${constants.common.weather_forecast} ${query.city[1]}`}</h1>
                <FormBlock/>
                <div>
                    {weatherData ?
                        weatherData.map(({date, list}) =>
                            <div className={styles.container} key={date}>
                                <div className={styles.period}>
                                    <span>{formatDate(date, constants.locales.en, {
                                        month: "2-digit",
                                        day: "2-digit"
                                    })}</span>
                                    <span>{getWeekDay(new Date(list[0].dt))}</span>
                                </div>

                                <div className={styles.weather}>
                                    {list.map(params =>
                                        <div className={styles.weatherDetails} key={params.dt}>
                                            <div className={styles.temperature}>
                                            <span
                                            >{formatTime(params.dt_txt, constants.locales.pl, {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}</span>
                                                <span>{Math.round(params.main.temp)} {constants.common.degree}</span>
                                            </div>
                                            <div className={styles.icons}>
                                                <IconComponent
                                                    name={params.weather[0].icon}
                                                    className={{
                                                        width: 40,
                                                        height: 40,
                                                        // width: 340,
                                                        // height: 340,
                                                        // fill:'green',
                                                        // stroke:'red'
                                                    }}
                                                />
                                            </div>
                                            <WeatherParameters styles={styles.parameters} parameters={params}/>
                                            <span className={styles.description}>{params.weather[0].description}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) :
                        null
                    }
                </div>
            </div>
        </Layout>

    )
}
export default CityWeather

export async function getServerSideProps({params}) {

    const cityParams = await getCityCoordinates(params.city[1])
    const weatherData = cityParams && await getWeatherDetails(cityParams)

    if (!weatherData) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            weatherData,
        }
    }
}