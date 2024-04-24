import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Card } from './Card';
import { PaginationCom } from './PaginationCom';
export const Templete = ({ Movies, setMovies, pages }) => {
    return (

        <Container className='my-5'>
            <Row>

                {(Movies.length > 0) ? (Movies.map((el) => {
                    return (<Col sm={3} key={el.id}>
                        <Card movie={el} />
                    </Col>
                    )

                })) : <h4>لا يوحد افلام</h4>}
                <PaginationCom setMovies={setMovies} pages={pages} />

            </Row>
        </Container>
    )
}
