import React from "react";
import { Navbar1 } from "./Navbar.jsx";
import { TitleCard } from "./titleCard.jsx";
import { ImageCards } from "./PictureCards.jsx";
import { Footer } from "./footer.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar1 />
			<TitleCard />
			<ImageCards />
			<Footer />
		</div>
	);
};

export default Home;
