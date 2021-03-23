import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const Home = () => (
	<div className="text-center mt-5">
		<h1>Star Wars</h1>
		<Link to="/people">
			<button className="btn btn-primary">people</button>
		</Link>
		<Link to="/planets">
			<button className="btn btn-primary">planets</button>
		</Link>
	</div>
);
