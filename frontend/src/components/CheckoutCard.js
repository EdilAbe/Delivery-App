import {ListGroup, Card} from 'react-bootstrap';

function CheckoutCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Cart</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Delivery</ListGroup.Item>
        <ListGroup.Item>Subtotal</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" style={{ backgroundColor: '#DC0D28', color: "white", margin: "10px" , padding : "10px"}}>Checkout</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CheckoutCard;