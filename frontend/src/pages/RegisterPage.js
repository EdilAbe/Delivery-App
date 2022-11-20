import { Row, Col, Container } from "react-bootstrap";
import Register from "../components/Register.js";

function RegisterPage() {
  return (
    <Container class="container-fluid">
      <Row className="justify-content-center">
        <Col sm={5}>
          {" "}
          <img
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
            src="https://th.bing.com/th/id/OIP.QJc629_70VYRQYbyMgwSewHaDi?pid=ImgDet&w=204&h=97&c=7"
            alt="Fresh Veggies"
          />
        </Col>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0"></p>
        </div>
        <Col sm={5}>
          <Register />
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
