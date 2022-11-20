import {Row , Col, Container} from 'react-bootstrap';
import MenuCard from './MenuCard.js';

function Grid() {
  return (
    <Container>
      
      <Row>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
        <Col> <MenuCard /> </Col>
       
      </Row>
    </Container>
  );
}

export default Grid;