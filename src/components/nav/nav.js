import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export default class Nav extends Component {
	render() {
		return (
			<div className="Nav">
				<Link to="/">
					<div className="leftN">Cristian Gonzalez</div>
				</Link>
				<div className="middleN" />
				<div className="rightN">
					<Link to="/Projects">
						<div>Projects</div>
					</Link>
					<Link to="/About">
						<div>About</div>
					</Link>
					<Link to="/Education">
						<div>Education</div>
					</Link>
					<Link to="/Contact">
						<div>Contact</div>
					</Link>
				</div>
			</div>
		);
	}
}
