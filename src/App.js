import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import Modal from "./components/Modal";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
