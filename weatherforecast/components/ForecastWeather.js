import styles from '../styles/ForecastWeather.module.scss'
import {getWeekDay} from "../helpers/getWeekDay";
import {constants} from "../constants/constants";
import {WeatherParameters} from "./common/WeatherParameters";
import {formatDate} from "../helpers/formatDate";
import IconComponent from "./common/IconComponent";


export const ForecastWeather = ({weatherData}) => {
    return (
        <div className={styles.container}>
            {weatherData ?
                weatherData.slice(0, 3).map(data =>
                    <div className={styles.weatherBlock} key={data.dt}>
                        <span className={styles.weekDay}>{getWeekDay(data.dt)}</span>
                        <span className={styles.date}>{formatDate(data.dt, constants.locales.pl)}</span>
                        <IconComponent
                            name={data.weather[0].icon}
                            className={{
                                width: 40,
                                height: 40,
                                // width: 340,
                                // height: 340,
                                // fill:'green',
                                // stroke:'red'
                            }}
                        />
                        <span
                            className={styles.temperature}>{Math.round(data.main.temp)} {constants.common.degree}</span>
                        <WeatherParameters styles={styles.parameters} parameters={data}/>
                        <span className={styles.description}>{data.weather[0].main}</span>
                    </div>
                ) :
                null
            }
        </div>
    )
}

