import React, { Component } from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import Fade from "react-reveal/Fade";
import backgroundImage from "../book-shelf.jpg";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <Jumbotron fluid className="p-0">
        <Container fluid className="p-0 m-0">

          <Row className="m-0 p-0 col-lg-12">

              <img
                id="backgroundImage"
                src={backgroundImage} alt="..."
              />
<Fade left>
              <Caption className="carousel-caption" style={{ bottom: "35%" }}>
                <h2>
                  This is a sample website demonstating the use of react to sell
                  books online
                </h2>
              </Caption>
</Fade>
          </Row>

        </Container>


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
