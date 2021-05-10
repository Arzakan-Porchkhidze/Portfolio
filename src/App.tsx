import React from "react";
import "./App.css";

//Global Styles
import { GlobalStyles } from "./global-styles";

import AboutPage from "./pages/about/about-page";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<AboutPage />
		</div>
	);
}

export default App;
