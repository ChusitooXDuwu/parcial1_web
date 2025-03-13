import { FunctionComponent } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { useNavigate } from "react-router";
import bg from "../../assets/comida_bg.jpg";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  
  const goToStores = () => {
    navigate("/stores");
  };

  const goToMenu = () => {
    navigate("/menu");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    position: 'relative' as 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  
  const menuItemStyle = {
    cursor: 'pointer',
    textAlign: 'center' as 'center',
    padding: '10px',
    transition: 'all 0.3s ease',
    borderRadius: '5px',
    margin: '5px 0'
  };

  // Hover effect can be added in the SCSS file
  // Or you can use React state to handle hover states

  return (
    <div style={backgroundStyle}>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={8} lg={6} xl={5} className="d-flex justify-content-center">
            <Card className={styles.login_card}>
              <Card.Body>
                <Row>
                  <Col 
                    onClick={goToStores} 
                    style={menuItemStyle} 
                    className={styles.menu_item || 'hover-effect'}
                  >
                    <h3>stores</h3>
                  </Col>
                  <Col 
                    onClick={goToMenu} 
                    style={menuItemStyle} 
                    className={styles.menu_item || 'hover-effect'}
                  >
                    <h3>menu</h3>
                  </Col>
                  <Col 
                    onClick={goToCart} 
                    style={menuItemStyle} 
                    className={styles.menu_item || 'hover-effect'}
                  >
                    <h3>cart</h3>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;