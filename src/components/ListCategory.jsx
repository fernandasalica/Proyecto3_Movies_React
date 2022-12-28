import Movie from './Movie';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const ListCategory = ({data}) => {
  return (
    <>
      <Container className='mb-5'>
        <h2 className='mt-3'>Categorías</h2>
        <hr />
        <Row xs={2} md={3} xl={5} className="g-5 mt-3">
                {data.map((d, i) => (
                    <Movie d={d} key={'Movie' + i} />
                ))}
          </Row>
      </Container>
    </>
  );
};

export default ListCategory;