import {useMemo, useState} from "react";
import parseData from "../services/parseDataForRender";

const usePagination = (data) => {
    const [page, setPage] = useState(1);
    let cards = useMemo(() => parseData(data), [data, page]);
    cards = cards.slice((page - 1) * 21, page * 21);
    return {cards, numberOfPages: Math.round(data.length / 21), currentPage: page, setPage};
}

export default usePagination;
