import { FunctionComponent, useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router";
import { FormattedMessage, useIntl } from "react-intl";
import { LocaleContext } from "../../contexts/LocaleContext";
import logo from "../../assets/logo.png";
import imageUnder from "../../assets/foodUnder.jpeg";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);

  const { locale } = useContext(LocaleContext);
  const intl = useIntl();
  const { formatMessage } = intl;

  const validatePassword = (value: string) => {
    setPassword(value);
    if (value.length <= 8 && value.length > 5) {
      setPasswordError(formatMessage({ id: "loginPage.passwordInvalid" }));
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const isPasswordValid = password.length <= 8 && password.length > 5;
    if (!isPasswordValid) {
      event.stopPropagation();
      setPasswordError(formatMessage({ id: "loginPage.passwordInvalid" }));
    }

    if (form.checkValidity() === false || !isPasswordValid) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    navigate("/home");
  };

  return (
    <Container fluid className={styles.login_container}>
      <Row className="w-100">
        <Col className={styles.color_left}>
          <div className={styles.logo_container}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h3 className={styles.slogan}>
              <FormattedMessage id="loginPage.slogan" />
            </h3>
            <img src={imageUnder} alt="Food Image" className={styles.food_image} />
          </div>
        </Col>

        <Col className={styles.right_column}>
          <Card className={styles.login_card}>
            <Card.Body>
              <Card.Title>
                <FormattedMessage id="loginPage.title" />
              </Card.Title>
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <FormattedMessage id="loginPage.email" />
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={formatMessage({ id: "loginPage.emailPlaceholder" })}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <FormattedMessage id="loginPage.password" />
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={formatMessage({ id: "loginPage.passwordPlaceholder" })}
                    required
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                    isInvalid={!!passwordError}
                  />
                </Form.Group>

                <Button type="submit" className="mt-2">
                  <FormattedMessage id="loginPage.loginButton" />
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
