import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import Styled from "styled-components";
import Amex from "../img/Amex.svg";
import Mastercard from "../img/Mastercard.svg";
import Visa from "../img/Visa.svg";

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter
        style={{
          backgroundColor: "var(--mainDark)",
          color: "var(--lightBlue)"
        }}
        className="font-small pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow between>
            <MDBCol md="4">
              <h5 className="title">Social</h5>
              <a href="#!" className="fb-ic mr-3">
                <MDBIcon size="lg" fa icon="facebook-f" />
              </a>
              <a href="#!" className="tw-ic mr-3">
                <MDBIcon size="lg" fa icon="twitter" />
              </a>
              <a href="#!" className="ins-ic mr-3">
                <MDBIcon size="lg" fa icon="instagram" />
              </a>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Information</h5>
              <a href="#!">About Ray's Book Store</a>
              <br />
              <a href="#!">Terms of Use</a>
              <br />
              <a href="#!">Privacy policy</a>
              <br />
              <a href="#!">FAQ</a>
              <br />
            </MDBCol>
            <MDBCol md="4">
              <MDBContainer
                className="d-flex align-items-start"
                style={{ height: "150px" }}
              >
                <MDBRow style={{ width: "100%", flexwrap: "nowrap" }}>
                  <h6 className="title">We acccept</h6>
                  <MDBCol sm="3">
                    <PaymentImg src={Visa} alt="visa" />
                  </MDBCol>
                  <MDBCol sm="3">
                    <PaymentImg src={Mastercard} alt="mastercard" />
                  </MDBCol>
                  <MDBCol sm="3">
                    <PaymentImg src={Amex} alt="amex" />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://github.com/rayt90"> Ray's Online Bookstore </a>
            <p>ABN: ** *** *** ***</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

const PaymentImg = Styled.img`
width: 3.75rem;
height: 2.5rem;
`;
