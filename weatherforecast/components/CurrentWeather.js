import styles from '../styles/CurrentWeather.module.scss'
import {constants} from "../constants/constants";
import {WeatherParameters} from "./common/WeatherParameters";
import Link from "next/link";
import {formatDate} from "../helpers/formatDate";
import IconComponent from "./common/IconComponent";


export const CurrentWeather = ({weatherData, weatherData: {main, weather, name, dt}}) => {

    return (
        <>
            {weatherData?.main ? (
                    <div className={styles.container}>
                        <div className={styles.temperature}>
                            <span>{Math.round(main.temp)} {constants.common.degree}</span>
                            <IconComponent
                                name={weather[0].icon}
                                className={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </div>
                        <span className={styles.city}>{name.split(" ")[0]}</span>
                        <WeatherParameters styles={styles.parameters} parameters={weatherData}/>
                        <div className={styles.details}>
                            <span className={styles.date}>{formatDate(dt, constants.locales.pl)}</span>
                            <Link
                                href={`/in/${name.split(" ")[0]}`}
                            ><a>{constants.common.details}</a>
                            </Link>
                        </div>
                    </div>)
                : null
            }
        </>
    )
}

