
import axios from "axios";
const GetAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&api_key=672f841ce52924fc968056c4fef4e4d8&page=1&sort_by=popularity.desc%27")
        dispatch({ type: "getMovies", data: res.data.results, page: res.data.total_pages })
    }
}
export default GetAllMovies;
export const searchMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=672f841ce52924fc968056c4fef4e4d8&query=${word}&language=ar`)
        dispatch({ type: "getMovies", data: res.data.results, page: res.data.total_pages })
    }
}
export const getMoviesinPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&api_key=672f841ce52924fc968056c4fef4e4d8&page=${page}&sort_by=popularity.desc%27`)
        dispatch({ type: "getMovies", data: res.data.results, page: res.data.total_pages })
    }
}