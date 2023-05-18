import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<AppBar
			position='static'
			elevation={12}
			sx={{ borderBottom: "solid", borderBottomColor: "green",borderBottomWidth:'4' }}
		>
			<Container maxWidth='xl' sx={{ background: "white" }}>
				<Toolbar
					disableGutters
				>
					<Container
						sx={{
							display: { xs: "flex", md: "flex", xl: "flex" },
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Link to='/' style={{ textDecoration: "none" }}>
							<Typography
								variant='h6'
								sx={{
									fontFamily: "BlinkMacSystemFont",
									color: "black",
								}}
							>
								TheCocktailDB
							</Typography>
						</Link>
					</Container>
					<Container
						sx={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "right",
							marginRight: "5rem",
						}}
					>
						<Link to='/' style={{ textDecoration: "none" }}>
							<Typography
								variant='h6'
								letterSpacing={2}
								sx={{
									marginRight: "1rem",
									color: "black",
									onclick: { color: "red" },
									"&:hover": {
										color: "#4da64d",
									},
								}}
							>
								Home
							</Typography>
						</Link>
						<Link to='/About' style={{ textDecoration: "none" }}>
							<Typography
								variant='h6'
								letterSpacing={2}
								sx={{
									color: "black",
									onclick: { color: "red" },
									"&:hover": {
										color: "#4da64d",
									},
								}}
							>
								About
							</Typography>
						</Link>
					</Container>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
