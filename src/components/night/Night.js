import React, { Component } from "react";
import "./Night.css";
export default class Night extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: true
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			button: !this.state.button
		});
	}
	render() {
		return (
			<div className="container">
				<button
					className={this.state.button ? "buttonTrue" : "buttonFalse"}
					onClick={this.handleClick}
				>
					Click Me!
				</button>
			</div>
		);
	}
}
