import { getCams } from "../helpers/getCams";
import { useEffect, useState } from "react";

export const useFetchCams = (category) => {

    const [cams, setCams] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [paises, setPaises ] = useState([]);

    const getCamaras = async() => {
        const newCams = await(getCams(category));
        newCams.length > 0 ? setPaises(newCams[0].pais) : '';
        setCams(newCams);
        setIsLoading(false);
    }

    useEffect( () => {
        getCamaras();
    }, [] ) 

    return {
        cams,
        paises,
        isLoading 
    }
}
