import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MainPage, Clients, Products } from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/products" component={Products} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </Router>
  );
};

export default Routes;
