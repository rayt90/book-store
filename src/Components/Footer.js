import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import Amex from "../img/Amex.svg";
import Mastercard from "../img/Mastercard.svg";
import Visa from "../img/Visa.svg";

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Social</h5>
              <MDBBtn floating social="fb" size="lg">
                <MDBIcon fa icon="facebook" className="pr-3" />
              </MDBBtn>
              <MDBBtn floating social="ins" size="lg">
                <MDBIcon fa icon="instagram" className="pr-3" />
              </MDBBtn>
              <MDBBtn floating social="tw" size="lg">
                <MDBIcon fa icon="twitter" className="pr-3" />
              </MDBBtn>

            </MDBCol>
            <MDBCol md="6">
            <MDBContainer className="d-flex align-items-start" style={{ height: '150px' }}>
                <MDBRow style={{ width: '100%'}}>
                <h6 className="title">We acccept</h6>
                  <MDBCol sm="3">
                    <img src={Visa} alt="visa"/>
                  </MDBCol>
                  <MDBCol sm="3">
                    <img src={Mastercard} alt="mastercard"/>
                  </MDBCol>
                  <MDBCol sm="3">
                    <img src={Amex} alt="amex" />
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
