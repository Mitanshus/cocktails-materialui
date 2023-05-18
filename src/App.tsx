import React, { useState } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Header";
import { Links } from "./Links";
import CocktailList from "./Pages/CocktailList";
import store from "./Store/Store";
import { BrowserRouter } from "react-router-dom";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Links />
			</BrowserRouter>
		</>
	);
}

export default App;
