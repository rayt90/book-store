import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import BookList from "./Components/BookList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import ComingSoon from "./Components/ComingSoon";
import Search from "./Components/Search";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route path="/search" component={Search} />
          <Route component={Default} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
