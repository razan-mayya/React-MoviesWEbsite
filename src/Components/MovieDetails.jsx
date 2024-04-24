import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react';
import axios from 'axios';

export const MovieDetails = () => {
    const par = useParams()
    const [Movie, setMovie] = useState([]);

    const getMovieById = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${par.id}?language=ar&api_key=672f841ce52924fc968056c4fef4e4d8`)
        setMovie(res.data)
        console.log(res.data);
    }
    useEffect(() => {
        getMovieById()
    }, [])
    return (
        <Container>
            <Row className="cardDatailes py-4 my-5">
                <Col md={4}>
                    <img className="pic" src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} />
                </Col>
                <Col md={8} className="py-5" >
                    <h5>اسم الفيلم:{Movie.original_title}</h5>
                    <h5>تاريخ الفيلم:{Movie.release_date}</h5>
                    <h5>عدد المقيمين:{Movie.vote_count}</h5>
                    <h5>التقييم:{Movie.vote_average}</h5>
                </Col>
            </Row>
            <Row md={12} className="cardDatailes my-4 p-4" style={{ minHeight: "100px" }}>
                <h5>القصة:{Movie.overview}</h5>
            </Row>
            <Row >
                <div className="center">
                    <Link to={"/"}>
                        <button className="buttonStyle">الصفحة الرئيسسة</button>
                    </Link>
                    <a href={Movie.backdrop_path}>
                        <button className="buttonStyle"> مشاهدة الفيلم</button>
                    </a>
                </div>

            </Row>
        </Container>
    )
}
