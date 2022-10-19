import styles from '../styles/CitiesSwitcher.module.scss'
import {citiesData} from "./data/citiesData";
import Link from "next/link";

export const CitiesSwitcher = () => {
    return (
        <div className={styles.container}>
            {citiesData.map(city =>
                <Link
                    href={`/${city.name.split(" ")[0]}`}
                    key={city.id}
                >
                    <button className={styles.button}>{city.name}</button>
                </Link>
            )}
        </div>
    )
}