import React from "react";
import "./App.css";

//Global Styles
import { GlobalStyles } from "./global-styles";

//components
import Header from "./components/header/header";

//Pages
import AboutPage from "./pages/about/about-page";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<AboutPage />
		</div>
	);
}

export default App;
