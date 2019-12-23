import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBCol,
  MDBBtnGroup,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (

        <MDBContainer>
          <MDBNavbar
            fixed="top"
            id="nav"
            style={{ backgroundColor: "var(--mainDark)" }}
          >
            <MDBContainer>
              <MDBNavbarBrand style={{ color: "white" }}>
                Ray's Online Bookstore
              </MDBNavbarBrand>

              <MDBHamburgerToggler
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active className="py-2">
                    <Link to="/">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem className="py-2">
                    <Link to="/search">Search</Link>
                  </MDBNavItem>
                  <MDBNavItem className="py-2">
                    <Link to="/contact">Contact</Link>
                  </MDBNavItem>
                  <MDBCol className="mb-4 px-0">
                    <MDBBtnGroup>
                      <MDBBtn color="unique">Sign in</MDBBtn>
                      <MDBBtn color="unique">Sign Up</MDBBtn>
                      <MDBBtn color="unique">
                        <i className="fa fa-shopping-cart" /> My Cart
                      </MDBBtn>
                    </MDBBtnGroup>
                  </MDBCol>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>

    );
  }
}

export default NavbarPage;
