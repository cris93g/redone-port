import React, { Component } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import picture from "../../images/profile.jpg";
import Header from "../../components/Header/Header";
export default class Home extends Component {
	render() {
		return (
			<div className="About">
				<div className="aboutP">
					<div className="movingL">
						<Header />
					</div>
					<div className="titleHeader">
						<h1>Javascript</h1>
						<h1>Web Developer</h1>
					</div>
					<div className="titleSub">
						Passionate developer based in Dallas, TX <br />
						specializing in developing (and occasionally designing) <br />
						exceptional, high-quality websites and applications.{" "}
					</div>
					<div className="myPic" />
					<Link to="/Contact">
						{" "}
						<Button variant="contained" color="primary">
							Hire Me
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
