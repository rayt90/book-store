import React, { Component } from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import Pulse from "react-reveal/Pulse";
import CarouselPage from "./Carousel";

export default class Home extends Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="p-0"
        style={{ backgroundColor: "var(--mainWhite)" }}
      >
        <Pulse>
          <Container fluid className="p-0 m-0">
            <Row className="m-0 p-0 col-lg-12">
              <CarouselPage />
            </Row>
          </Container>
        </Pulse>
      </Jumbotron>
    );
  }
}
