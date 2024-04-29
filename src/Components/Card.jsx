import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import GetAllMovies from './Redux/Actions/GetAllMovies';
import { useEffect } from 'react';

export const Card = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className='filmImg'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <div className='hidden'>
                    <p>اسم الفيلم:{movie.title}</p>
                    <p>{movie.release_date}:12/4/38939</p>
                    <p> عدد المقيمين:{movie.vote_count}</p>
                    <p>التقييم :{movie.vote_average}</p>

                </div>
            </div>

        </Link>
    )
}
