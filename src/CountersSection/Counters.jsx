import React, { useEffect, useState } from "react";
import "./Counters.css";
import search from "../assets/greenSearchIco.svg";
import users from "../assets/greenUsersIco.svg";
import messages from "../assets/greenMessagesIco.svg";
import visits from "../assets/greenNewUserIco.svg";
import { Container, Row, Col } from "react-bootstrap";

function Counters() {
  const [searchesCount, setSearches] = useState(0);
  const [usersCount, setUsers] = useState(0);
  const [messagesCount, setMessages] = useState(0);
  const [visitsCount, setVisits] = useState(0);

  useEffect(() => {
    for (let i = 0; i <= 42588; i++) {
      setTimeout(() => {
        if (i < 31310) {
          setVisits(i);
          if (i < 2981) {
            setMessages(i);
          }
          if (i < 4) {
            setUsers(i);
          }
        }

        setSearches(i);
      }, 800);
    }
  }, []);

  return (
    <section className="CountersSection">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="CountersGreyCol">
              <div className="CountersGreyColContents">
                <img src={search} alt="search icon" />
                <h5>عدد عمليات البحث</h5>
                <p>{searchesCount}</p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={3}>
            <div className="CountersGreyCol">
              <div className="CountersGreyColContents">
                <img src={users} alt="users icon" />
                <h5>عدد المستخدمين</h5>
                <p>{usersCount}</p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={3}>
            <div className="CountersGreyCol">
              <div className="CountersGreyColContents">
                <img src={messages} alt="messages icon" />
                <h5>عدد الرسائل</h5>
                <p>{messagesCount}</p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={3}>
            <div className="CountersGreyCol">
              <div className="CountersGreyColContents">
                <img src={visits} alt="visits icon" />
                <h5>زيارات الملفات</h5>
                <p>{visitsCount}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Counters;
