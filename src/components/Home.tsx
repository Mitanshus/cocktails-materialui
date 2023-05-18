import React from "react";
import SearchForm from "./SearchForm";
import CocktailList from "../Pages/CocktailList";
import { Box } from "@mui/material";

const Home = () => {
	return (
		<>
			<Box>
				<Box>
					<SearchForm />
				</Box>
				<Box>
					<CocktailList />
				</Box>
			</Box>
		</>
	);
};

export default Home;
