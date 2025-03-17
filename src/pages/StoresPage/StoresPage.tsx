import { FunctionComponent, useContext } from "react";
import { Navbar, Container, Row, Col, Card, Carousel, Image, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "../../contexts/LocaleContext";
import styles from "./StoresPage.module.scss";
import bg from "../../assets/comida_bg.jpg";
import cartLogo from "../../assets/cartLogo.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface MenuItem {
  id: number;
  nombre_comida: string;
  photo: string;
}

const StoresPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  
  const { isLoading, isError, data } = useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => {
      const response = await axios.get<MenuItem[]>("https://my.api.mockaroo.com/comida.json?key=936621f0");
      return response.data;
    },
  });

  const carouselImageStyle = {
    width: "100%",
    height: "60vh",
    objectFit: "cover" as "cover",
  };

  const fixedCardStyle = {
    width: "100%",
    height: "320px",
    margin: "0 auto",
  };

  const fixedImageContainerStyle = {
    height: "200px",
    overflow: "hidden",
    position: "relative" as "relative",
  };

  const fixedImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
  };

  // Loading state
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">
              <FormattedMessage id="menuPage.loading" />
            </span>
          </Spinner>
          <p className="mt-3">
            <FormattedMessage id="menuPage.loading" />
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
            <FormattedMessage id="menuPage.error.title" />
          </Alert.Heading>
          <p>
            <FormattedMessage id="menuPage.error.message" />
          </p>
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
            <FormattedMessage id="menuPage.error.retry" />
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
            <FormattedMessage id="menuPage.noData.title" />
          </Alert.Heading>
          <p>
            <FormattedMessage id="menuPage.noData.message" />
          </p>
        </Alert>
      </Container>
    );
  }

  const carouselItems = data.slice(0, 3);
  const cardItems = data.slice(0, 4);

  return (
    <Container fluid className={styles.menu_container}>
      
      <Navbar className={styles.header}>
        <Container className={styles.header_container}>
          <Image src={cartLogo} alt="Cart Logo" className={styles.cart_logo} />
          <Navbar.Brand className={styles.header_title}>
            <FormattedMessage id="storesPage.title" />
          </Navbar.Brand>
          <Image src={cartLogo} alt="Cart Logo" className={styles.cart_logo} />
        </Container>
      </Navbar>

      
      <Container>
        <h2 className="text-center mt-4">
          <FormattedMessage id="menuPage.carouselTitle" />
        </h2>
        <Carousel slide={false}>
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img src={item.photo} alt={item.nombre_comida} style={carouselImageStyle} />
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
                  <Card.Img variant="top" src={item.photo} style={fixedImageStyle} />
                </div>
                <Card.Body>
                  <Card.Title className={styles.menu_title}>{item.nombre_comida}</Card.Title>
                  <Card.Text className="text-muted">
                    <FormattedMessage id="menuPage.brand" />
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

export default StoresPage;