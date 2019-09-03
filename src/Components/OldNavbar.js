import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

export default class OldNavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-xl bg-primary navbar-dark pr-lg-1 pl-sm-5 justify-content-between">
        {/*<Link to="/">
          <img src={logo} alt="book-store" className="navbar-brand" />
        </Link>*/}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-toggle"
          aria-controls="nav-content"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbar-toggle">
          <ul className="navbar-nav ">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link active">
                home
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/search" className="nav-link">
                search
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/comingsoon" className="nav-link">
                coming soon
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div id="navbar-button-group">
          <ButtonContainer className=" nav-item ml-1">Sign In</ButtonContainer>
          <ButtonContainer className=" nav-item ml-1">Sign Up</ButtonContainer>
          <Link to="/cart" className="ml-1">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fa fa-shopping-cart" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
          <ButtonContainer>
            <span className="mr-2 ml-2">
              <i className="fa fa-heart" />
            </span>
          </ButtonContainer>
        </div>
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
