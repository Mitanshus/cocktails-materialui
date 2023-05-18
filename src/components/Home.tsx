import React from "react";
import SearchForm from "./SearchForm";
import CocktailList from "../Pages/CocktailList";
import { Box, Typography } from "@mui/material";

const Home = () => {
	return (
		<>
			<Box>
				<Box>
					<SearchForm />

					<Typography
						variant='h4'
						letterSpacing={3}
						sx={{
							justifyContent: "center",
							alignItems: "center",
							display: "flex",
							paddingBottom: "3.5rem",
							marginTop: "1rem",
							textTransform: "capitalize",
							fontSize: "2rem",
						}}
					>
						Cocktails
					</Typography>
				</Box>
				<Box>
					<CocktailList />
				</Box>
			</Box>
		</>
	);
};

export default Home;
