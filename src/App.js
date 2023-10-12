import "./App.css";
import Logo from "./images/logo.png";
import Illustration from "./images/illustration-dashboard.png";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useWindowDimension from "./hooks/useWindowDimension";

function App() {
	const [email, setEmail] = useState("");
	const [invalid, setInvalid] = useState(false);
	const {  width } = useWindowDimension();
	function handleSubmit() {
		if (
			String(email).match(
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
			)
		) {
			console.log(email);
			setInvalid(false);
		} else {
			setInvalid(true);
		}
	}
	function updateEmail(event) {
		setEmail(event.target.value);
	}
	return (
		<div className="App">
			<section className="hero">
				<img className="logo" src={Logo} alt="logo" />
				<h1>
					We are launching <span>soon!</span>
				</h1>
				<p>Subscribe and get notified</p>
				<form onSubmit={() => false}>
					<input
						className={invalid ? "invalidInput" : "input"}
						onChange={updateEmail}
						value={email}
						type="email"
						placeholder="Your email address..."
					/>
					<button
						className={
							width < 700 && invalid ? "mobileButtonInvalid" : "button"
						}
						type="button"
						onClick={handleSubmit}>
						Notify me
					</button>
					{invalid && (
						<h5 className="errorMessage">
							Please provide a valid email address
						</h5>
					)}
				</form>
			</section>
			<img
				className={
					width < 700 && invalid ? "mobileIllustrationInvalid" : "illustration"
				}
				src={Illustration}
				alt="illustration"
			/>
			<section
				className={width < 700 && invalid ? "mobileInvalidSocials" : "socials"}>
				<button className="socialButton">
					<FontAwesomeIcon icon={faFacebookF} className="icon" />
				</button>
				<button className="socialButton">
					<FontAwesomeIcon icon={faTwitter} className="icon" />
				</button>
				<button className="socialButton">
					<FontAwesomeIcon icon={faInstagram} className="icon" />
				</button>
			</section>
			<p className="copyright">
				<span>
					<FontAwesomeIcon icon={faCopyright} className="copyrightIcon" />
				</span>
				Copyright ManageMe. All rights reserved
			</p>
		</div>
	);
}

export default App;
