import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import bookImg1 from "../img/bookImg1.jpg";
import bookImg2 from "../img/bookImg2.jpg";
import bookImg3 from "../img/bookImg3.jpg";
import styled from "styled-components";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner style={{ height:"600px" }}>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={bookImg1} alt="First slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption style={{ bottom:"40%" }}>
              <Caption className="h2-responsive">
                This is a sample website demonstating the use of react to sell
                books online
              </Caption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={bookImg2}
                alt="Second slide"
              />
            </MDBView>
            <MDBCarouselCaption style={{ bottom:"40%" }}>
              <Caption className="h2-responsive">
                Each product can be placed in the cart and bought through a
                sandbox paypal account
              </Caption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={bookImg3} alt="Third slide" />
            </MDBView>
            <MDBCarouselCaption style={{ bottom:"40%" }}>
              <Caption className="h2-responsive">
                This website was designed using bootstrap, reactstrap,
                react-reveal & mdbreact
              </Caption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;

const Caption = styled.h2`
  right: 15%;
  left: 15%;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #6c757d;
`;
