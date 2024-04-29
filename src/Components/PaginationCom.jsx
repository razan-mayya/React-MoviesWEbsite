import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesinPage } from "./Redux/Actions/GetAllMovies";
export const PaginationCom = () => {
    const thepages = useSelector(state => state.pages)
    let pageCount = thepages
    const dispatch = useDispatch()
    const handlePageClick = (data) => {
        const page = data.selected + 1;
        dispatch(getMoviesinPage(page))
    }
    return (
        <div className='centerpagination'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالي"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="السابق"
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
            />
        </div>
    )
}
