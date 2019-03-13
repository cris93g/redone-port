import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./content/Home/Home";
import Contact from "./content/Contact/Contact";
import Education from "./content/Education/Education";
import Projects from "./content/Projects/Projects";

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Contact} exact path="/Contact" />
		<Route component={Education} exact path="/Education" />
		<Route component={Projects} exact path="/Projects" />
	</Switch>
);
