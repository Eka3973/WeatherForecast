import nc from "next-connect";
import cors from "cors";
import {getCityNameByCoordinates} from "../../http/getCityNameByCoordinates";


const handler = nc()
    // use connect based middleware
    .use(cors())
    .get(async (req, res) => {
        const response = await getCityNameByCoordinates()
        res(response)
    });

export default handler;
