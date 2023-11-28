import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="wrapper text-center mt-3 py-3">

			<header>
				<h1 className="mt-4">Insert your username.</h1>
				<h2 className="mt-2">Get your contacts with a click.</h2>
				<h3 className="mt-2 mb-4">Add, edit and update your contact list.</h3>
			</header>
			
			
			<span className="mt-5"> 
				<input className="text-center border rounded-3" value={store.currentUser ? store.currentUser : ""} placeholder="Insert username (agenda_slug)." onChange={(event) => actions.setUser(event.target.value)}></input>
			</span>

			<br/>

			
			<Link to="/contacts">
				<button className="btn btn-success mt-3"> 
					GET CONTACTS
				</button>
			</Link>

			
		</div>
	);
};
