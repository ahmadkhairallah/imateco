import React from "react";
import "./Partners.css";
import { Container, Row, Col } from "react-bootstrap";
import Coders from "../assets/Coders-Logo.svg";
import Ventures from "../assets/Ventures-Logo.svg";
function Partners() {
  return (
    <section className="PartnersSection">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2 className="partnersTitles">شركاؤنا</h2>
            <div className="PartnersImages">
              <img src={Coders} alt="Coders logo" />
              <img src={Ventures} alt="Ventures logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;
