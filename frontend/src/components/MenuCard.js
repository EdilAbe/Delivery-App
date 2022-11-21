import { Card , Button, ListGroup} from 'react-bootstrap';

function MenuCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.EvomBSkvP6mcRyv_JGIRuAHaE9?w=261&h=180&c=7&r=0&o=5&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link style={{border:"0",color : "black" ,textDecoration: "none", margin: "10px" }}>Price</Card.Link>
        <Button href="#" style={{border:"0",  backgroundColor: '#DC0D28', color: "white", margin: "10px" }} >Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;