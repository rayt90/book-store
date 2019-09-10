import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavBar";
import Home from "./Components/Home";
import BookList from "./Components/BookList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import ComingSoon from "./Components/ComingSoon";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import WishList from "./Components/WishList";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route path="/search" component={Search} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/wishlist" component={WishList} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
