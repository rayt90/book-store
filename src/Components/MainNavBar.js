import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar style={{ backgroundColor: "#181818" }} id="nav" fixed={`top`} dark expand="xl">
        <Container>
          <NavbarBrand tag={Link} to="/">
            Ray's Online Bookstore
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/search">
                  Search
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/comingsoon">
                  Coming Soon
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
              <ButtonGroup size="lg">
                <Button tag={Link} to="/signin">Sign in</Button>
                <Button tag={Link} to="/signup">Sign Up</Button>
                <Button tag={Link} to="/cart">
                  <i className="fa fa-shopping-cart" /> My Cart
                </Button>
                <Button tag={Link} to="/wishlist">
                  <i className="fa fa-heart" />
                </Button>
              </ButtonGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
