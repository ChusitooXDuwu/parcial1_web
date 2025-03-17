import { FunctionComponent, useContext } from "react";
import { Navbar, Container, Row, Col, Card, Carousel, Image, Spinner, Alert } from "react-bootstrap";
import styles from "./CartPage.module.scss";
import { useNavigate } from "react-router";
import cartLogo from "../../assets/cartLogo.png";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "../../contexts/LocaleContext";

interface FoodItem {
  id: number;
  nombre_comida: string;
  photo: string;
}

const CartPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const handleLogin = () => {
    navigate("/home");
  };

  
  const { isLoading, isError, data } = useQuery({
    queryKey: ['foodItems'],
    queryFn: async () => {
      const response = await axios.get<FoodItem[]>('https://my.api.mockaroo.com/comida.json?key=936621f0');
      return response.data;
    }
  });

  const carouselImageStyle = {
    width: "100%",
    height: "60vh",
    objectFit: "cover" as "cover",
  };

  const carouselContainerStyle = {
    maxWidth: "100%",
    marginTop: "20px",
  };

  const fixedCardStyle = {
    width: '100%',
    height: '320px',
    margin: '0 auto',
  };

  const fixedImageContainerStyle = {
    height: '200px',
    overflow: 'hidden',
    position: 'relative' as 'relative',
  };

  const fixedImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  };

  // Loading state
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">
              <FormattedMessage id="cartPage.loading" />
            </span>
          </Spinner>
          <p className="mt-3">
            <FormattedMessage id="cartPage.loading" />
          </p>
        </div>
      </Container>
    );
  }

  // Error state
  if (isError) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>
            <FormattedMessage id="cartPage.error.title" />
          </Alert.Heading>
          <p>
            <FormattedMessage id="cartPage.error.message" />
          </p>
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
            <FormattedMessage id="cartPage.error.retry" />
          </button>
        </Alert>
      </Container>
    );
  }

  // No data state
  if (!data || data.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">
          <Alert.Heading>
            <FormattedMessage id="cartPage.noData.title" />
          </Alert.Heading>
          <p>
            <FormattedMessage id="cartPage.noData.message" />
          </p>
        </Alert>
      </Container>
    );
  }

  const carouselItems = data.slice(0, 3);
  const cardItems = data.slice(0, 4);

  return (
    <Container fluid className={styles.cart_container}>
      
      <Navbar className={styles.header}>
        <Container className={styles.header_container}>
          <Image src={cartLogo} alt="Cart Logo" className={styles.cart_logo} />
          <Navbar.Brand className={styles.header_title}>
            <FormattedMessage id="cartPage.title" />
          </Navbar.Brand>
          <Image src={cartLogo} alt="Cart Logo" className={styles.cart_logo} />
        </Container>
      </Navbar>

     
      <Container style={carouselContainerStyle}>
        <Carousel slide={false}>
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img 
                src={item.photo} 
                alt={item.nombre_comida} 
                style={carouselImageStyle} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x400?text=Imagen+No+Disponible';
                }}
              />
              <Carousel.Caption>
                <h3>{item.nombre_comida}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      
      <Container className="mt-4">
        <Row xs={1} md={2} lg={4} className="g-4"> 
          {cardItems.map((item) => (
            <Col key={item.id}>
              <Card className={styles.menu_card} style={fixedCardStyle}>
                <div style={fixedImageContainerStyle}>
                  <Card.Img 
                    variant="top" 
                    src={item.photo} 
                    style={fixedImageStyle}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible';
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className={styles.menu_title}>{item.nombre_comida}</Card.Title>
                  <Card.Text className="text-muted">
                    <FormattedMessage id="cartPage.brand" />
                  </Card.Text>
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
