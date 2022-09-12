import "./index.css";

const Pagination = ({currentPage, totalPages, setPage}) => {
    const set = (page) => {
        if(page <= totalPages  && page >= 1) {
            setPage(page);
            window.scroll(0,0);
        }
    }
    return (
        <div id="pagination" className="font-bold tracking-widest w-[40vw] flex justify-between">
            <button onClick={()=>set(1)}>first page</button>
            <button onClick={()=> set(currentPage - 1)}>back</button>
            <div>
                <button className="pages-index">{currentPage}</button>
                <button>/</button>
                <button className="pages-index">{totalPages}</button>
            </div>
            <button onClick={()=> set(currentPage + 1)}>next</button>
            <button onClick={()=>set(totalPages)}>last page</button>
        </div>
    );
};

export default Pagination;
