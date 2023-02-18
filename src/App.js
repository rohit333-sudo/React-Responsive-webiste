
import { Route, Switch, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import "./App.css";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";

import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/Team" component={Team}></Route>
        <Route exact path="/Services" component={Services}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
