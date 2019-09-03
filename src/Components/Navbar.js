import React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonGroup,
  Button,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../logo.svg";
import styled from "styled-components";

export default class NavBar extends React.Component {
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
      <NavWrapper>
        <Navbar className="bg-primary" dark expand="lg">
          <Container>
            <NavbarBrand href="/">
              <img src={logo} alt="book-store" id="brand" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <Collapse isOpen={this.state.isOpen} navbar>
                <NavItem>
                  <NavLink href="/">home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/search">search</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/comingsoon">coming soon</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">contact</NavLink>
                </NavItem>
              </Collapse>

              <ButtonGroup size="lg">
                <Button>Sign in</Button>
                <Button>Sign Up</Button>
                <Button>
                  <i className="fa fa-shopping-cart" /> My Cart
                </Button>
                <Button>
                  <i className="fa fa-heart" />
                </Button>
              </ButtonGroup>
              {/*  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
            </Nav>
          </Container>
        </Navbar>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  text-transform: capitalize;
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-radius: 0.5rem;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
