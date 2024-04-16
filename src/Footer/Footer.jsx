import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/MainLogo.png";
import twitter from "../assets/twitter.svg";
function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} lg={3} xl={2}>
            <img src={logo} className="navbarLogo footerImg" alt="logo" />
          </Col>{" "}
          <Col xs={12} lg={3} xl={{ span: 2, offset: 2 }}>
            <a href="#" className="footerLink">
              من نحن
            </a>
            <a href="#" className="footerLink">
              ملفات التقنيين
            </a>
            <a href="#" className="footerLink">
              شركاؤنا
            </a>
            <a href="#" className="footerLink">
              الاسئله الشائعه
            </a>
          </Col>
          <Col xs={12} lg={3} xl={{ span: 2, offset: 1 }}>
            <a href="#" className="footerLink">
              مدونه
            </a>
            <a href="#" className="footerLink">
              الدخول
            </a>
            <a href="#" className="footerLink">
              سجل
            </a>
          </Col>
          <Col xs={12} lg={3} xl={{ span: 2, offset: 1 }}>
            <p className="footerSocialText">
              وسائل <span className="greenText">التواصل الاجتماعي</span>
            </p>
            <a href="" className="SocialLink">
              <img src={twitter} alt="twitter icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
