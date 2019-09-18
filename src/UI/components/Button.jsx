import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ width, height, gradientStart, gradientEnd, text, type }) => {
	const inlineStyles = {
		width: `${width}px`,
		height: `${height}px`,
		backgroundImage: `linear-gradient(${gradientStart}, ${gradientEnd})`
	};

	return (
		<button type={type} style={inlineStyles} className={styles.button}>
			{text}
		</button>
	);
};

export default Button;
