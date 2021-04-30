//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

let contador = 0;
setInterval(() => {
	let quinto = Math.floor(contador / 10000) % 10;
	let cuarto = Math.floor(contador / 1000) % 10;
	let tercero = Math.floor(contador / 100) % 10;
	let segundo = Math.floor(contador / 10) % 10;
	let primero = Math.floor(contador / 1) % 10;

	ReactDOM.render(
		<Home
			primero={primero}
			segundo={segundo}
			tercero={tercero}
			cuarto={cuarto}
			quinto={quinto}
		/>,
		document.querySelector("#app")
	);

	contador++;
}, 1000);
