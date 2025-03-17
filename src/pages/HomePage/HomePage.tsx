import { FunctionComponent, useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "../../contexts/LocaleContext";
import styles from "./HomePage.module.scss";
import bg from "../../assets/comida_bg.jpg";
import cartLogo from "../../assets/cartLogo.png";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const goToStores = () => navigate("/stores");
  const goToMenu = () => navigate("/menu");
  const goToCart = () => navigate("/cart");

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    position: "relative" as "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} xl={5} className="d-flex justify-content-center">
            <Card className={styles.menu_card}>
              <Card.Body>
                
                <div className={styles.menu_row}>
                  <div onClick={goToStores} className={styles.menu_item}>
                    <img src={cartLogo} alt="Cart Icon" className={styles.menu_icon} />
                    <h3>
                      <FormattedMessage id="homePage.stores" />
                    </h3>
                  </div>

                  <div onClick={goToMenu} className={styles.menu_item}>
                    <img src={cartLogo} alt="Cart Icon" className={styles.menu_icon} />
                    <h3>
                      <FormattedMessage id="homePage.menu" />
                    </h3>
                  </div>

                  <div onClick={goToCart} className={styles.menu_item}>
                    <img src={cartLogo} alt="Cart Icon" className={styles.menu_icon} />
                    <h3>
                      <FormattedMessage id="homePage.cart" />
                    </h3>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
