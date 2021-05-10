import React from "react";

//styles
import {
	HeaderWrapper,
	HeaderStyled,
	Navbar,
	LogoStyle,
} from "./header.styles";

import Logo from "../../img/logo.svg";

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<HeaderStyled>
				<LogoStyle src={Logo} alt="logo" />
				<Navbar>
					<div>about</div>
					<div>work</div>
					<div>contact</div>
				</Navbar>
			</HeaderStyled>
		</HeaderWrapper>
	);
};

export default Header;
