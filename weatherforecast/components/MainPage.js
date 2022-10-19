import styles from "../styles/Home.module.scss";
import {CurrentWeather} from "./CurrentWeather";
import {ForecastWeather} from "./ForecastWeather";
import {CitiesSwitcher} from "./CitiesSwitcher";

const MainPage = ({currentWeather, forecastWeather}) => {
    return (
        <div className={styles.container}>
            <CurrentWeather weatherData={currentWeather}/>
            <ForecastWeather weatherData={forecastWeather}/>
            <CitiesSwitcher/>
        </div>
    )
}
export default MainPage