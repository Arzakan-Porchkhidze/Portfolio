import React from "react";

//styles
import { Tech, TechContent, TechSVGs } from "./technologies.styles";

//SVGs
import TSLogo from "../../img/typescript.svg";
import JSLogo from "../../img/javascript.svg";
import HTMLLogo from "../../img/html5.svg";
import CSSLogo from "../../img/css3.svg";
import ReactLogo from "../../img/react.svg";

const Technologies: React.FC = () => {
	return (
		<Tech>
			<TechContent>
				<h1 className="technologies-title">Technologies</h1>
				<TechSVGs>
					<img src={HTMLLogo} alt="html logo" />
					<img src={CSSLogo} alt="css logo" />
					<img src={JSLogo} alt="JS logo" />
					<img src={TSLogo} alt="TS logo" />
					<img src={ReactLogo} alt="react logo" />
				</TechSVGs>
			</TechContent>
		</Tech>
	);
};

export default Technologies;
