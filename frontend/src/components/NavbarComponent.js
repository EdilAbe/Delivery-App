import{ React, useState }from 'react'
import { useNavigate ,  useParams} from 'react-router-dom';
import {Link, Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import apiClient from '../services/apiClient.js';

function NavbarComponent(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  const handleClickName = (e) => {
    setUsername(props.user);
    console.log("handle click eventHandler",props.user)
  };

  const handleCloseUser = () => {
    setUsername(null);
  };

  const handleLogout = async () => {
    handleCloseUser();
    await apiClient.logoutUser();
    props.setUser(null);
    navigate('/');
  };



  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/"style={{color : '#DC0D28' ,fontSize: "40px", fontFamily: "fantasy", marginLeft: "30px"}} >WEDELIVER</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`} 
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title href="/" id={`offcanvasNavbarLabel-expand-${expand}`}>
                WEDELIVER
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button  variant="outline-ERROR" style={{border:"0",  backgroundColor: '#DC0D28', color: "white", margin: "10px" }}>Search</Button>
                </Form>
                 
                  <NavDropdown onClick={handleClickName} 
                    id={`offcanvasNavbarDropdown-expand-${expand}`} title = "Profile" style={{fontSize: "20px", marginLeft: "30px"}}
                  >
                    <NavDropdown.Item href="#action3">{ props.user ?  {username} : <a href = "/login" style={{color : "black" ,textDecoration: "none" }}>Sign In</a>}</NavDropdown.Item>
                    <NavDropdown.Item href="/Checkout/props.user.id">
                      Cart
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href = "/login">
                    { props.user ?  <h4>Logout</h4> : ""}
                      
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;