import React, { Component } from "react";
import "./Projects.css";
export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: ""
		};
	}

	boxClick = e => {
		this.setState({
			bgColor: "red"
		});
	};

	render() {
		return (
			<div>
				<div className="sidePara">
					<h1>My Projects</h1>
					<p>Hover over the cards to learn more about each project</p>
				</div>
				<div className="Projects">
					<div className="cardContainer">
						<div className="Cards" />
						<div className="Cards" />
						<div className="Cards" />
						<div className="Cards" />
						<div className="Cards" />
					</div>
				</div>
			</div>
		);
	}
}
