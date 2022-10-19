import {useRouter} from "next/router";
import styles from '../styles/FormBlock.module.scss'
import {constants} from "../constants/constants";

const FormBlock = () => {
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        const city = event.target
        router.push(`/in/${city.country.value}`)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <label htmlFor="country"/>
            <input className={styles.input}
                   placeholder={constants.common.search}
                   type="text"
                   id="country"
                   name="country"
                   required
            />
            <button className={styles.button} type="submit">{constants.common.submit}</button>
        </form>
    )

}
export default FormBlock
