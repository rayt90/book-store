import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="book-store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/search" className="nav-link">
              book search
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
        <Link to="/cart" className="ml-auto">
          <button>
            <i class="fa fa-shopping-cart" />
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}
