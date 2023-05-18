import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { filterCocktails, setCocktails } from "../Store/Store";
import SinglrCocktail from "../Pages/SinglrCocktail";

const SearchForm = () => {
	const dispatch = useDispatch();
	const filtered = filterCocktails;
	const [search, setSearch] = useState("");
	useEffect(() => {
		const fetchCocktails = async () => {
			try {
				const response = await fetch(
					"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
				);
				const data = await response.json();
				dispatch(setCocktails(data));
				console.log(data);
			} catch (error) {
				console.error("Error fetching cocktails:", error);
			}
		};

		fetchCocktails();
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterCocktails(search));
	}, [dispatch, search]);

	return (
		<>
			<Container sx={{ paddingBottom: "4rem", width: "50vw", height: "auto" }}>
				<Paper
					elevation={8}
					sx={{
						maxBlockSize: "5rem",
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
						p: 3,
						marginTop: "5rem",
						overflow: "hidden",
					}}
				>
					<Container sx={{}}>
						<Box>
							<Typography
								variant='body2'
								fontWeight='bold'
								letterSpacing={4}
								color='#476a2e'
								sx={{ m: 2 }}
							>
								Search your Favorite Cocktail
							</Typography>
						</Box>
						<Box
							sx={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
								sx={{ marginBottom: "0.5rem", border: 1 }}
							/>
						</Box>
					</Container>
				</Paper>
			</Container>
		</>
	);
};

export default SearchForm;
