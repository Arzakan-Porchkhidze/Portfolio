import styled from "styled-components";

export const Tech = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	background-color: #f0f2f6;
`;

export const TechContent = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 10px;

	h1 {
		font-size: 32px;
		font-weight: bold;
		color: #4f4fb3;
	}
`;

export const TechSVGs = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	img {
		width: 200px;
		height: 200px;
	}
`;
