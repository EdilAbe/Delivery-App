import {Carousel} from 'react-bootstrap';

function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.6YMs2kED_VCbWCKSF9FftwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.R1HOXDxQR9Dsj6VczQCEpQHaE8?w=262&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.RBk0NL1A9LkonentpoQlSQHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;