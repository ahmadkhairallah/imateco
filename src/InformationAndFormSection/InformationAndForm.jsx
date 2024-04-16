import React from "react";
import "./InformationAndForm.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function InformationAndForm() {
  return (
    <section className="InformationAndFormSection">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} xl={{ span: 5, offset: 1 }}>
            <div className="FormGreyDiv">
              <h4 className="FormTitle">
                هل تبحث عن شريك <span className="greenText">مؤسس تقني</span>؟
              </h4>{" "}
              <h5 className="FormSubTitle">
                هل أنت  تبحث عن مطور/مبرمج و تتطلع إلى انضمامه اليك؟
              </h5>
              <h6 className="FormListTitle">
                يجب عليك التسجيل فقط إذا كنت كنت:
              </h6>
              <div className="FormList">
                <p>1- مالك شركه ناشئه</p>
                <p>2- تريد شريك تقني لك</p>
              </div>
              <Button className="GreenBorderButton info">بحث</Button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="FormGreyDiv">
              <h4 className="FormTitle">
                سجّل لتصبح شريك<span className="greenText"> مؤسس تقني </span>
                بشركة ناشئة
              </h4>{" "}
              <h5 className="FormSubTitle">
                هل أنت مطور/مبرمج و تتطلع إلى الانضمام إلى شركة ناشئة ؟
              </h5>
              <h6 className="FormListTitle">
                يجب عليك التسجيل فقط إذا كنت كنت:
              </h6>
              <div className="FormList">
                <p>1- مطور/مبرمج</p>
                <p>2- تريد أن تكون شريكًا مؤسسًا في شركة تقنية ناشئة</p>
              </div>
              <Button className="GreenButton info">سجل كمؤسس تقني</Button>
            </div>
          </Col>

          <Col xs={12}>
            <p className="ExplanationText">
              إذا كنت تمتلك حساب ، يرجى تسجيل الدخول{" "}
              <a href="/" className="ExplanationTextLink">
                هنا
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default InformationAndForm;
