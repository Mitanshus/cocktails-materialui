import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
	return (
		<>
			<Container
				sx={{
					justifyContent: "center",
					display: "block",
					alignItems: "center",
				}}
			>
				<Container sx={{ justifyContent: "center" ,alignItems:'center',display:'flex',marginTop:'4rem'}}>
					<Typography variant='h4'>ABOUT US</Typography>
				</Container>
				<Box sx={{ p: 10 }}>
					<Typography
						paragraph
						sx={{ lineHeight: "2rem", fontw: "400", letterSpacing: "2px" }}
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
						praesentium illum consequatur quae, voluptatem inventore maxime
						expedita reiciendis ea sapiente. Facilis eaque assumenda minus.
						Suscipit, hic similique, dolorum delectus possimus id, ad at
						provident in natus nihil eveniet sit molestiae. Nulla quia minima
						sequi dolore in aliquid ipsam optio nihil nesciunt adipisci! Fuga
						voluptatem, soluta rem sed suscipit inventore aliquid dignissimos in
						esse, vel temporibus dolor praesentium, repudiandae aperiam nemo
						quos iure culpa autem odio obcaecati rerum! Voluptatibus corporis,
						quos reprehenderit aliquid dolore praesentium, ea dolores, iste
						nesciunt sed ab. Mollitia excepturi qui, odit cum perspiciatis,
						ratione quos accusamus quis dolores, iusto quas hic unde temporibus
						ut soluta deserunt aliquid pariatur beatae dolor modi molestiae ex
						a! Fugit voluptatum modi laborum repudiandae quas vel saepe quo nam,
						architecto enim. Vero ullam laudantium praesentium quasi. Quae amet
						quia voluptatibus rerum itaque repellat iusto, ducimus obcaecati
						sunt necessitatibus vero reprehenderit earum, maiores, sint eius
						modi odit. Maxime, libero repellat et distinctio laborum eius unde
						voluptas facere? Quibusdam veniam expedita ipsum numquam aperiam
						pariatur sunt corporis laudantium laboriosam sequi, incidunt
						officiis, maxime amet repellat! Quibusdam facere aspernatur,
						necessitatibus ipsam vel reprehenderit excepturi itaque dolores,
						temporibus sint sunt esse provident libero est repellat voluptatum?
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default About;
