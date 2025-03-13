import { FunctionComponent } from "react";
import { Navbar, Button, Card, Col, Container, Form, Row, Image } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { useNavigate } from "react-router";
import bg from "../../assets/comida_bg.jpg";
import { Carousel } from "react-bootstrap";

const CartPage: FunctionComponent = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/home");
  };

  
  const carouselImageStyle = {
    width: "100%",
    height: "60vh", // Adjust height as needed
    objectFit: "cover" as "cover"
  };

  
  const carouselContainerStyle = {
    maxWidth: "100%",
    marginTop: "20px"
  };

  return (
    <Container fluid className={styles.login_container}>
      <Navbar className="bg-body-tertiary" style={{ height: "10vh", backgroundColor: "#f8f9fa" }}>
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          
        </Container>
      </Navbar>

      <Container style={carouselContainerStyle}>
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              src={bg}
              alt="First slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={bg}
              alt="Second slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={bg}
              alt="Third slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={bg} />
                <Card.Body>
                  <Card.Title>Menu Item</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default CartPage;