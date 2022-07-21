import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

// import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {/* <Button>Add to Cart</Button> */}
        {/* <ListGroup.Item> */}
        <Row>
          <Col>Status:</Col>
          <Col>
            {product.countInStock > 0 ? (
              <Badge bg="success">In Stock</Badge>
            ) : (
              <Badge bg="danger">Unavailable</Badge>
            )}
          </Col>
        </Row>
        {/* </ListGroup.Item> */}
      </Card.Body>
    </Card>
  );
}
export default Product;
