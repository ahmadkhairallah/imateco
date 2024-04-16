import { useState } from "react";

import "./home.css";
import Header from "./Header/Header";
import AdImage from "./assets/Ad.svg";
import Hero from "./HeroSection/Hero";
import Counters from "./CountersSection/Counters";
import { Container, Col, Row } from "react-bootstrap";
import InformationAndForm from "./InformationAndFormSection/InformationAndForm";
import Partners from "./PartnersSection/Partners";
import Footer from "./Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <section>
        <a
          href="https://www.namaventures.com/"
          target="_blank"
          className="AdImage"
        >
          <img src={AdImage} className="img-fluid" alt="Ad" />
        </a>
      </section>
      <Hero />
      <Counters />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
      </Container>
      <InformationAndForm />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
