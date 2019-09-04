import React, { Component } from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import backgroundImage from "../book-shelf.jpg";

export default class Home extends Component {
  render() {
    return (
      <Jumbotron fluid className="p-0">
        <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0 col-lg-12">
          <img id="backgroundImage" src={backgroundImage} alt="book-shelf" />
          <div className="carousel-caption" style={{ bottom: "35%" }}>
          <h2>This is a sample website demonstating the use of react to sell books online</h2>
          </div>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
