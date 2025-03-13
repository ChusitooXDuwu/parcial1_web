import { FunctionComponent, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);

  const validatePassword = (value: string) => {
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    // Check password length
    const isPasswordValid = password.length >= 8;
    
    if (!isPasswordValid) {
      event.stopPropagation();
      setPasswordError("Password must be at least 8 characters long");
    }
    
    // Check overall form validity
    if (form.checkValidity() === false || !isPasswordValid) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    // If everything is valid, navigate
    navigate("/Deportes/home");
  };

  return (
    <Container fluid className={styles.login_container}>
      <Row className="d-flex justify-content-center">
        <Col className="col-auto">
          <Card className={styles.login_card}>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                    isInvalid={!!passwordError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {passwordError || "Password is required."}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button type="submit" className="mt-2">
                  Log in
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