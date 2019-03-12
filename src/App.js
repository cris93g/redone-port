import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/nav/Nav";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav />

					{routes}
				</div>
			</Router>
		);
	}
}

export default App;
