import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Card } from './Card';
import { PaginationCom } from './PaginationCom';
import { useDispatch, useSelector } from 'react-redux';
import GetAllMovies from './Redux/Actions/GetAllMovies';
import { useEffect } from 'react';

export const Templete = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllMovies())
    }, [])
    const allmovies = useSelector(state => state.Movies)

    return (
        <Container className='my-5'>
            <Row>

                {(allmovies.length > 0) ? (allmovies.map((el) => {
                    return (<Col sm={3} key={el.id}>
                        <Card movie={el} />
                    </Col>
                    )

                })) : <h4>لا يوحد افلام</h4>}
                <PaginationCom setMovies={setMovies} />

            </Row>
        </Container>
    )
}
