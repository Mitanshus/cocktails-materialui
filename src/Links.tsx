import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglrCocktail from "./Pages/SinglrCocktail";
import Error from "./components/Error";

export const Links = () => {
	return (
		
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='cocktail/:id' element={<SinglrCocktail />} />
				<Route path='*' element={<Error />} />
			</Routes>
	);
};
