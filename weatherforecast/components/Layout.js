import Head from "next/head";
import {constants} from "../constants/constants";


const Layout = ({children, keywords}) => {

    return (
        <>
            <Head>
                <title>Weather Forecast</title>
                <meta keywords={`${constants.common.metaContent} ${keywords}`}/>
            </Head>
            <main>{children}</main>
        </>
    )
}

export default Layout