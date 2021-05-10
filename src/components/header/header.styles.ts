import styled from "styled-components";

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
`;

export const HeaderStyled = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 20px 20px -20px #4e8a81;
`;

export const Navbar = styled.nav`
	display: flex;
	div {
		font-size: 2rem;
		margin: 0px 5rem;
		&:last-child {
			margin: 0px;
		}
	}
`;

export const LogoStyle = styled.img`
	width: 70px;
	height: 70px;
`;
