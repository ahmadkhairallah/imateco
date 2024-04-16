import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/MainLogo.png";
import AmericanLogo from "../assets/AmericanFlag.svg";
function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} className="navbarLogo" alt="Imateco logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="LinksHeaderDiv">
              <Nav.Link href="#">ملفات التقنيين</Nav.Link>
              <Nav.Link href="#">مدونه</Nav.Link>
              <Nav.Link href="#">من نحن</Nav.Link>
              <Nav.Link href="#">شركاؤنا</Nav.Link>
              <Nav.Link href="#">الاسئله الشائعه</Nav.Link>
            </div>
            <div className="LeftButtonsInHeader">
              <Button className="transparentButton languageButton">
                <span>EN</span>
                <img src={AmericanLogo} alt="English language icon" />
              </Button>
              <Button className="GreenButton Header">الدخول</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
