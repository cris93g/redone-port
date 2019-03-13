import React, { Component } from "react";
import "./Projects.css";
import text from "../../images/text.PNG";
import twitch from "../../images/twitch-app.PNG";
import roomers from "../../images/roomers-app.PNG";

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
						<div className="Cards">
							<img src={text} className="textE" />
						</div>
						<div className="Cards">
							<img src={roomers} className="textE" />
						</div>
						<div className="Cards">
							<img src={twitch} className="textE" />
						</div>
						<div className="Cards">{/* sadd */}</div>
						<div className="Cards" />
					</div>
				</div>
			</div>
		);
	}
}
