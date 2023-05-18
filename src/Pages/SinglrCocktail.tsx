import {
	Box,
	Button,
	CardMedia,
	CircularProgress,
	Container,
	Grid,
	LinearProgress,
	Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

type Drinks = {
	strDrink: string;
	strDrinkThumb: string;
	strCategory: string;
	strAlcoholic: string;
	strGlass: string;
	strInstructions: string;
	strIngredient1: string;
};
type newc = {
	name: string;
	image: string;
	info: string;
	category: string;
	glass: string;
	instructions: string;
	ingredients: any[];
};

const SinglrCocktail = () => {
	const { id } = useParams();
	const [loading, setLoading] = React.useState(false);
	const [cocktail, setCocktail] = React.useState<newc | null>(null);

	React.useEffect(() => {
		setLoading(true);
		async function getCocktail() {
			try {
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
				);
				const data = await response.json();
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		}
		getCocktail();
	}, [id]);
	if (loading) {
		return <LinearProgress />;
	}
	if (!cocktail) {
		return <h2 className='section-title'>no cocktail to display</h2>;
	} else {
		const { name, image, category, info, glass, instructions, ingredients } =
			cocktail;
	}
	return (
		<>
			<Container
				sx={{
					columnGap: "0.1rem",
					rowGap: "0.5rem",
					display: "Grid",
					justifyContent: "center",
					alignItems: "left",
					fontWeight: "bold",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "left",
						m: 1,
					}}
				>
					<Link to='/'>
						<Button
							variant='contained'
							color={"success"}
							sx={{
								width: "10rem",
								backgroundColor: "#476a2e",
								marginTop: "4rem",
								"&:hover": {
									backgroundColor: "#cce6cc",
									color: "#4da64d",
								},
							}}
						>
							Back Home
						</Button>
					</Link>
				</Box>
				<Box>
					<Typography
						variant='h4'
						letterSpacing={3}
						sx={{
							alignItems: "center",
							display: "flex",
							marginBottom: "3.5rem",
							justifyContent: "center",
							fontWeight: "bold",
						}}
					>
						{cocktail.name}
					</Typography>
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "left", alignItems: "left" }}
				>
					<Box>
						<CardMedia
							component='img'
							src={cocktail.image}
							alt={cocktail.name}
							sx={{ width: "22rem", marginRight: "0.5rem" }}
						></CardMedia>
					</Box>
					<Box sx={{ p: 2, display: "block" }}>
						<Box sx={{ display: "flex", p: 0.5 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "70%",
								}}
							>
								<Typography variant='body1' fontWeight='bold'>
									Name :
								</Typography>
							</Box>
							<Box
								sx={{
									marginLeft: "0.22rem",
									marginTop: "5px",
									p: 0.6,
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									{cocktail.name}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "60%",
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									Category :
								</Typography>
							</Box>
							<Box sx={{ marginLeft: "0.22rem", marginTop: "5px", p: 0.6 }}>
								<Typography variant='body2' fontWeight='bold'>
									{cocktail.category}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "60%",
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									Info :
								</Typography>
							</Box>
							<Box
								sx={{
									marginLeft: "0.22rem",
									marginTop: "5px",
									p: 0.6,
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									{cocktail.info}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "60%",
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									Glass :
								</Typography>
							</Box>
							<Box
								sx={{
									marginLeft: "0.22rem",
									marginTop: "5px",
									p: 0.6,
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									{cocktail.glass}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "60%",
									width: "13%",
								}}
							>
								<Typography
									fontWeight='bold'
									sx={{
										width: "7rem",
									}}
									variant='body2'
								>
									Instructons :
								</Typography>
							</Box>
							<Box
								sx={{
									marginLeft: "0.22rem",
									marginTop: "5px",
									p: 0.6,
								}}
							>
								<Typography variant='body2' fontWeight='bold'>
									{cocktail.instructions}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "15%",
									backgroundColor: "#d4e6a5",
									p: 1,
									height: "60%",
									fontWeight: "bold",
									width: "15%",
								}}
							>
								<Typography variant='body2' sx={{ fontWeight: "bold" }}>
									Ingredients :
								</Typography>
							</Box>
							{cocktail.ingredients.map((ingredient) => {
								return (
									<Box
										sx={{
											marginLeft: "0.22rem",
											marginTop: "5px",
											p: 0.6,
											fontWeight: "bold",
										}}
									>
										<Typography variant='body2' sx={{ fontWeight: "bold" }}>
											{ingredient}
											{ingredient && ","}
										</Typography>
									</Box>
								);
							})}
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default SinglrCocktail;
