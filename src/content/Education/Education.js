import React, { Component } from "react";

import styled from "styled-components";
import "./Education.css";
import { Link } from "react-router-dom";

export default class Education extends Component {
	render() {
		return (
			<div className="EducationC">
				<div className="techHeader">
					<h2> Technologies</h2>
				</div>

				<div className="educationWrapper">
					<div className="circle">
						<a href="https://reactjs.org/">
							<img src={require("../../images/react.svg")} />
						</a>
					</div>
					<div className="circle">
						<a href="https://redux.js.org/">
							<img class="digitalB" src={require("../../images/redux.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
							<img class="digitalB" src={require("../../images/html.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
							<img class="digitalB" src={require("../../images/css.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://es6.io/">
							<img class="digitalB" src={require("../../images/js.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://expressjs.com/">
							<img class="digitalB" src={require("../../images/ex.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://nodejs.org/en/">
							<img class="digitalB" src={require("../../images/node.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://www.postgresql.org/">
							<img class="digitalB" src={require("../../images/post.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://www.npmjs.com/">
							<img class="digitalB" src={require("../../images/npm.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://git-scm.com/">
							<img class="digitalB" src={require("../../images/git.svg")} />
						</a>
					</div>

					<div className="circle">
						{" "}
						<a href="https://electronjs.org/">
							<img class="electro" src={require("../../images/elect.svg")} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
