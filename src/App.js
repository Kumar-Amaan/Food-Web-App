import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Log from "./components/Log";

import Logout from "./components/Auth/Logout";
import Admin from "./components/Auth/Admin";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Account from "./components/Account";
// import counter from "./pages/Menu/counter";
import fmenu from "./components/FoodMenu/fmenu";
// import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <>
    {/* <Registration /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Account} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/log" component={Log} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Route path="/fmenu" component={fmenu} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
