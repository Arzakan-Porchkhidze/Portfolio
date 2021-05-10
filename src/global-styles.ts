import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1{
  font-weight: lighter;
}
p {
  line-height: 150%;
}

span {
  color: #0062FF;
}

button {
  margin: 10px;
  margin-left: 0;
  width: 150px;
  height: 50px;
  background-color: #7B7CE6;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: .3s;
  &:hover {
    background-color: #4f4fb3;
  }
}

li {
  list-style: none
}

.App {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
