import React from "react";
import styles from "../styles/fork.module.scss";
import Button from "../../UI/components/Button";
import NewClientForm from "../containers/NewClientForm";
import { Link } from "react-router-dom";

const Fork = () => {
	return (
		<div className={styles.forkContainer}>
			<Link to="new-client">
				<Button
					width={281}
					height={65}
					gradientStart={"#00FFD8"}
					gradientEnd={"#ACBFBB"}
					text={"New Client"}
					type={"button"}
				/>
			</Link>
			<Link to="existing-client">
				<Button
					width={281}
					height={65}
					gradientStart={"#00FFD8"}
					gradientEnd={"#ACBFBB"}
					text={"Existing Client"}
					type={"button"}
				/>
			</Link>
		</div>
	);
};

export default Fork;
