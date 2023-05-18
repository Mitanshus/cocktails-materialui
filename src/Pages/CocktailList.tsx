import {
	Box,
	Button,
	Card,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface Cocktail {
	idDrink: string;
	strDrink: string;
	strGlass: string;
	strCategory: string;
	strDrinkThumb: string;
	strAlcoholic: string;
}

const CocktailList = () => {
	var filtered = useSelector((state: any) => state.filteredCocktails);
	console.log(filtered);
	return (
		<Container maxWidth='lg'>
			<Grid container spacing={2}>
				{filtered.map((cocktail: Cocktail) => {
					return (
						<Grid item xs={12} xl={4} md={4}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Card
									key={cocktail.idDrink}
									sx={{
										p: 0.5,
										alignItems: "center",
										alignContent: "center",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
									}}
								>
									<CardMedia
										sx={{ width: "20rem" }}
										component='img'
										src={cocktail.strDrinkThumb}
									></CardMedia>
									<Typography variant='h4' sx={{ alignItems: "initial" }}>
										{cocktail.strDrink}
									</Typography>
									<Typography variant='h5'>{cocktail.strGlass}</Typography>

									<Typography paragraph>{cocktail.strCategory}</Typography>
									<Box sx={{ display: "flex", justifyContent: "center" }}>
										<Link to={`cocktail/${cocktail.idDrink}`}>
											<Button
												variant='contained'
												color='success'
												// href={`cocktail/${cocktail.idDrink}`}
												sx={{
													"&:hover": {
														backgroundColor: "#cce6cc",
														color: "#4da64d",
													},
												}}
											>
												Details
											</Button>
										</Link>
									</Box>
								</Card>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
export default CocktailList;
