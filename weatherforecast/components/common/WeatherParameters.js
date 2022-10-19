import {constants} from "../../constants/constants";

export const WeatherParameters = ({parameters: {main, wind}, styles}) => {

    return (
        <div className={styles}>
            <span>{constants.common.feelsLike} {Math.round(main.feels_like)} {constants.common.degree}</span>
            <span>{constants.common.wind} {wind.speed} {constants.common.milliseconds}</span>
            <span>{constants.common.humidity} {main.humidity}{constants.common.percent}</span>
        </div>
    )

}