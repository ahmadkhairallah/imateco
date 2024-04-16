import React from "react";
import "./Hero.css";
import logo from "../assets/whiteLogo.svg";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero">
      <Container fluid>
        <div className="heroDiv">
          <div className="LogoAndText">
            <img src={logo} alt="logo" />
            <p>
              جاءت الفكرة وراء اماتكو من رؤية ألم كبير مراراً وتكراراً عند
              مراجعة الشركات التقنية الناشئة في منطقة الشرق الأوسط وشمال إفريقيا
              وهي عدم وجود{" "}
              <span style={{ color: "rgba(111, 218, 68, 1)" }}>
                الشريك المؤسس التقني
              </span>{" "}
              في الشركات التقنية الناشئة في منطقتنا
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
