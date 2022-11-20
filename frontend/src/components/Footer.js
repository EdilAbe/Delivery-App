import { Nav,Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
  <div style={{ backgroundColor: '#DC0D28', color: "white", marginTop: "100px" , padding : "30px"}}>

      <Row >
        <Col xs={6}>
        <h6 className='text-uppercase fw-bold mb-4'>
               WEDELIVER
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           

</Col>
    <Col>
    <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Order History
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rewards
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Account Details
                                    </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
Help                </a>
              </p>
        </Col>
    <Col>
          <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
About Us                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy policy
                </a>
              </p></Col>
    <Col>
    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                 1010 fake street
              </p>
              <p>
                info@example.com
              </p>
              <p> Customer Support
              </p>
              <p>Live Chat
              </p></Col>
   
        
      </Row>
      <Row>
      
        
        <div className='text-center p-4' >
        © 2021 Copyright: EdilAbe
        
      </div>
        
         </Row>
      
    </div>
  );
}

export default Footer;