import {useEffect, useState} from "react";
import fetchData from "../services/fetchService";
import parseData from "../services/parseDataForRender";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        fetchData("http://localhost:8080")
            .then(res => setData(res))
            .then(() => setLoading(false));
    }, [])

    return {data, loading};
}

export default useFetch;
