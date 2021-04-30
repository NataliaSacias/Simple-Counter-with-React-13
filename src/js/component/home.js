import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5">
			<span>
				<i className="far fa-clock"></i>
			</span>
			<span>{props.quinto}</span>
			<span>{props.cuarto}</span>
			<span>{props.tercero}</span>
			<span>{props.segundo}</span>
			<span>{props.primero}</span>
		</div>
	);
}
Home.propTypes = {
	quinto: PropTypes.number,
	cuarto: PropTypes.number,
	tercero: PropTypes.number,
	segundo: PropTypes.number,
	primero: PropTypes.number
};
