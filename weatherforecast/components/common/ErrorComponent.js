import styles from "../../styles/ErrorComponent.module.scss";

const ErrorComponent =({error})=> {
    return (
        <>
            {error &&
                <span className={styles.error}>
                {error}
            </span>}
        </>
    )
}
export default ErrorComponent