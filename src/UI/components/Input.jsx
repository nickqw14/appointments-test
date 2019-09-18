import React from "react";
import styles from "../styles/input.module.scss";

const Input = ({ handleValue, placeHolder, name }) => {
	return (
		<input
			className={styles.input}
			placeholder={placeHolder}
			name={name}
			onChange={e => handleValue(e.target.value)}
		></input>
	);
};

export default Input;
