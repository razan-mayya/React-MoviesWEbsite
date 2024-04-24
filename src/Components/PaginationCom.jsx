import axios from 'axios';
import ReactPaginate from 'react-paginate';


export const PaginationCom = ({ setMovies, pages }) => {
    const getMoviesinPage = async (page) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&api_key=672f841ce52924fc968056c4fef4e4d8&page=${page}&sort_by=popularity.desc%27`)
        setMovies(res.data.results)
    }
    let pageCount = pages
    const handlePageClick = (data) => {
        const page = data.selected + 1;
        getMoviesinPage(page)
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
