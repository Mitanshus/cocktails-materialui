import {
	Box,
	Button,
	CardMedia,
	CircularProgress,
	Container,
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
			<Container>
				<Box sx={{ display: "flex", justifyContent: "center", m: 6 }}>
					<Link to='/'>
						<Button
							variant='contained'
							color={"success"}
							sx={{ width: "10rem", backgroundColor: "#339933" }}
						>
							Back Home
						</Button>
					</Link>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Box>
						<CardMedia
							component='img'
							src={cocktail.image}
							alt={cocktail.name}
							sx={{ width: "30rem", marginRight: "2rem" }}
						></CardMedia>
					</Box>
					<Box sx={{ p: 2 }}>
						<Box sx={{ display: "flex", p: 0.5 }}>
							<Box
								sx={{ borderRadius: "1rem", backgroundColor: "#b3d9b3", p: 1 }}
							>
								<Typography variant='h6'>Name :</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.name}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{ borderRadius: "1rem", backgroundColor: "#b3d9b3", p: 1 }}
							>
								<Typography variant='h6'>Category :</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.category}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{ borderRadius: "1rem", backgroundColor: "##b3d9b3", p: 1 }}
							>
								<Typography variant='h6'>Info :</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.info}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{ borderRadius: "1rem", backgroundColor: "#b3d9b3", p: 1 }}
							>
								<Typography variant='h6'>Glass :</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.glass}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{
									borderRadius: "1rem",
									backgroundColor: "#b3d9b3",
									p: 1,
									height: "2.5rem",
								}}
							>
								<Typography
									sx={{
										width: "7rem",
									}}
									variant='h6'
								>
									Instructons :
								</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.instructions}</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", p: 1 }}>
							<Box
								sx={{ borderRadius: "1rem", backgroundColor: "#b3d9b3", p: 1 }}
							>
								<Typography variant='h6'>Ingredients :</Typography>
							</Box>
							<Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
								<Typography paragraph>{cocktail.ingredients}</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default SinglrCocktail;
