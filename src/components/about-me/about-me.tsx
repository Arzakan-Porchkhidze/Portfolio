import React from "react";

//styles
import { AboutDiv, MyImage, Description } from "./about-me.styles";

import myImage from "../../img/mImage.jpg";

const AboutMe: React.FC = () => {
	return (
		<AboutDiv>
			<Description>
				<div className="title">
					<div className="hide">
						Hello, I'm <span className="name">Arzakan Porchkhidze</span>
					</div>
					<div className="hide">
						a <span>Web Developer</span>
					</div>
				</div>
				<p>Tech Stack: HTML, CSS, JavaScript, Typescript, React.</p>
				<button className="contact-btn">contact me</button>
			</Description>
			<MyImage src={myImage} alt="Man" />
		</AboutDiv>
	);
};

export default AboutMe;
