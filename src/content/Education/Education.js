import React, { Component } from "react";

import styled from "styled-components";
import "./Education.css";
import { Link } from "react-router-dom";

const TopWrapper = styled.section`
	width: 100%;
	margin: auto;
	display: flex;
	height: 60vh;
	background-color: white;
`;

const Main = styled.section`
	width: 80%;
	height: 70%;
	margin: auto;
	display: flex;
`;
const LeftM = styled.section`
	font-family: "Questrial", sans-serif;
	width: 50%;
	font-size: 115%;

	heigh: 100%;
`;
const RightM = styled.section`
	width: 284.75px;
	height: 379.672px;
`;

const Wrapper = styled.section`
	width: 100%;
	margin: auto;
	display: flex;
	height: 50vh;
	font-family: "Questrial", sans-serif;
	background-color: rgb(250, 250, 250);
`;

const Circle = styled.section`
	width: 150px;
	height: 150px;
	background-color: rgb(250, 250, 251);
	box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	margin-left: 20px;
	border-radius: 50%;
	flex-wrap: wrap;
`;

const UpperR = styled.section`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: row;
	margin: auto;
	/* flex-wrap: wrap; */
`;

export default class Education extends Component {
	render() {
		return (
			<div className="About">
				<h3>About Me</h3>
				<br />
				<h4>I am developer/designer based in Dallas,Texas.</h4>
				<br />
				<p>
					Throughout my life ever since I was a child,
					<br /> I had enjoyed buildings things or if they were
					<br /> already built I would try to break them apart
					<br /> to figure out how they were built and then <br />
					rebuilt them. I didn't know it back then, but that <br />
					led me to have a passion for solving different
					<br /> problems and eventually led me to code.In the rare
					<br /> occasion you dont see me with my laptop you will <br />
					most likely see me reading a good book <br />
					at a local Starbucks.{" "}
				</p>

				<h1 className="wor">SKILLS</h1>

				<a href="https://reactjs.org/">
					<img class="digitalB" src={require("../../images/react.svg")} />
				</a>

				<a href="https://redux.js.org/">
					<img class="digitalB" src={require("../../images/redux.svg")} />
				</a>

				<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
					<img class="digitalB" src={require("../../images/html.svg")} />
				</a>

				<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
					<img class="digitalB" src={require("../../images/css.svg")} />
				</a>

				<a href="https://es6.io/">
					<img class="digitalB" src={require("../../images/js.svg")} />
				</a>

				<a href="https://expressjs.com/">
					<img class="digitalB" src={require("../../images/ex.svg")} />
				</a>

				<a href="https://nodejs.org/en/">
					<img class="digitalB" src={require("../../images/node.svg")} />
				</a>

				<a href="https://www.postgresql.org/">
					<img class="digitalB" src={require("../../images/post.svg")} />
				</a>

				<a href="https://www.npmjs.com/">
					<img class="digitalB" src={require("../../images/npm.svg")} />
				</a>

				<a href="https://git-scm.com/">
					<img class="digitalB" src={require("../../images/git.svg")} />
				</a>
			</div>
		);
	}
}
