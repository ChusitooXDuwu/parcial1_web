
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import { ApiCardData, CardData } from "../types/CardData";
import { Component } from "react";

interface HomePageRowProps {
  title: string;
  data: CardData[];
  handleShow: (modalData: CardData) => void;
}

const HomePage = () => (
  <div>
  <Component>
    <Container fluid>
      <Row>
        <Col>
          <h1>Home Page</h1>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  </Component>
  </div>
);


export default HomePage;
