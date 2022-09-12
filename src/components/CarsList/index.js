import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination";

const CarsList = () => {
    const {data, loading} = useFetch();
    const {cards, numberOfPages, currentPage, setPage} = usePagination(data);
    return (
        <div>
            <Pagination currentPage={currentPage} totalPages={numberOfPages} setPage={setPage}/>
            <Spinner loading={loading}/>
            <div className="flex flex-wrap">
                {cards}
            </div>
            <Pagination currentPage={currentPage} totalPages={numberOfPages} setPage={setPage}/>
        </div>
    );
};

export default CarsList;
