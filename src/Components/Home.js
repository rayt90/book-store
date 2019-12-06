import React, { Component } from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import Pulse from "react-reveal/Pulse";
import CarouselPage from "./Carousel";
import bookImg1 from "../img/bookImg1.jpg";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <Jumbotron fluid className="p-0" style={{ backgroundColor:"var(--mainWhite)"}}>
        <Pulse>
          <Container fluid className="p-0 m-0">
            <Row className="m-0 p-0 col-lg-12">
              {/*<img id="backgroundImage" src={bookImg1} alt="..." />

              <Caption className="carousel-caption" style={{ bottom: "35%" }}>
                <h2>
                  This is a sample website demonstating the use of react to sell
                  books online
                </h2>
              </Caption>
*/}
              <CarouselPage />
            </Row>
          </Container>
        </Pulse>
      </Jumbotron>
    );
  }
}

const Caption = styled.div`
  right: 15%;
  left: 15%;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #6c757d;
`;
