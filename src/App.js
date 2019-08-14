import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import BookList from "./Components/BookList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BookList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
