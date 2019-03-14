import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import DarkModeToggle from "../nightMode/DarkModeToggle";
export default class Nav extends Component {
	render() {
		return (
			<div className="Nav">
				<Link to="/">
					<div className="leftN">Cristian Gonzalez</div>
				</Link>
				<DarkModeToggle />
				<div className="middleN" />
				<div className="rightN">
					<Link to="/">
						<div className="navItem">About</div>
					</Link>{" "}
					<Link to="/Projects">
						<div className="navItem">Projects</div>
					</Link>
					<Link to="/Education">
						<div className="navItem">Technologies</div>
					</Link>
					<Link to="/Contact">
						<div className="navItem">Contact</div>
					</Link>
				</div>
			</div>
		);
	}
}
