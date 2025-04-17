import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Row>
        <Col>
          <p>Dukan &copy;{currentYear}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
