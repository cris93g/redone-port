import React, { Component } from "react";
import "./Projects.css";
import text from "../../images/text.PNG";
import twitch from "../../images/twitch-app.PNG";
import roomers from "../../images/roomers-app.PNG";
import rooms from "../../images/rooms.PNG";
import digital from "../../images/digital.PNG";
import edit from "../../images/edit.PNG";
import Github from "../../components/Icon/github";
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
					{/* <p>Electron|JS|CSS</p> */}
					<div className="cardContainer">
						<div className="Cards">
							<img src={digital} className="textE" />
						</div>
						<div className="projectDescription">
							<a href="http://www.digitalbuy.net/#/">
								<h3>Digital-Buy</h3>
							</a>
							<a href="https://github.com/cris93g/my-app">
								<Github />
							</a>
							<p>
								React|Bootstrap|Redux|Express
								<br />
								|PostgreSql|NodeJs|Styled Conponents
							</p>
							<p>Electronic ecommerce website </p>
							<p>*Mobile Only</p>
						</div>
						<div className="Cards">
							<img src={text} className="textE" />
						</div>

						<div className="textDescription">
							<h3>Text-Edit</h3>
							<a href="https://github.com/cris93g/text-edit">
								<Github />
							</a>
							<p>Electron|Css</p>
							<p>
								Text Editor where User can upload, edit, and
								<br /> save text and markdown files can be downloaded
								<br /> to users computer{" "}
							</p>
						</div>
						<div className="Cards">
							<img src={rooms} className="textE" />
						</div>
						<div className="projectDescription">
							{" "}
							<div className="roomsDescription">
								<a href="http://roomers.space/#/">
									<h3>Roomers</h3>
								</a>
								<a href="https://github.com/barc-housing/Roomers">
									<Github />
								</a>
								<p>
									React|NodeJs|MongoDB|Express
									<br />
									|AWS|Socket.io|GoogleMaps Api|
								</p>
								<p>
									Application where people can find or share their room for
									potential roomates{" "}
								</p>
							</div>
						</div>
						<div className="Cards">
							<img src={twitch} className="textE" />
						</div>
						<div className="projectDescription">
							{" "}
							<div className="twitchDescription">
								<h3>Twitch-me</h3>
								<a href="https://github.com/cris93g/twitch-me">
									<Github />
								</a>
								<p>
									React|Node.Js|Redux|Express|PostgreSql | Twitch Api | Auth0
									|Styled Components
								</p>
								<p>
									Application to find top Streamers and games on the twitch
									platform{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="quer" />
			</div>
		);
	}
}
