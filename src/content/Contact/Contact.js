import React, { Component } from "react";
import ReactContactForm from "react-contact-form-sd-ennergiia";
import "./Contact.css";
export default class Contact extends Component {
	render() {
		return (
			<div>
				<div>
					<h1 className="formHeader">
						I’m excited to learn about your <br />
						project. Ready to get started?
					</h1>
				</div>
				<div>
					<ReactContactForm
						formSubmitTo="email"
						submitButtonText="Submit"
						submissionEmail="cristhianswork@gmail.com"
						submitButtonClassName="submitB"
						fieldLeftColumnClassName="wep"
						formTitle=""
						showName="true"
						// submitButton="true"
						containerClassName="contactContainer"
						formTitleClassName="formT"
					/>
				</div>
			</div>
		);
	}
}
