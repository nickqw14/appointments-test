import React from "react";
import styles from "../styles/newClientsForm.module.scss";
import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import Input from "../../UI/components/Input";
import Button from "../../UI/components/Button";

const CREATE_CLIENT = gql`
	mutation insert_clients(
		$first_name: String!
		$last_name: String!
		$email: String!
	) {
		insert_clients(
			objects: [
				{ first_name: $first_name, last_name: $last_name, email: $email }
			]
		) {
			returning {
				id
				first_name
			}
		}
	}
`;

const NewClientForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [bookAppointment, setBookAppointment] = useState(false);

	const handleFullName = e => {
		setName(e);
	};
	const handleEmail = e => {
		setEmail(e);
	};

	const [
		createClient,
		{ loading: mutationLoading, error: mutationError, data }
	] = useMutation(CREATE_CLIENT);

	return (
		<div className={styles.container}>
			<h1>Enter your info</h1>
			<form
				className={styles.form}
				onSubmit={e => {
					e.preventDefault();
					createClient({
						variables: {
							first_name: name.split(" ").shift(),
							last_name: name.split(" ").pop(),
							email: email
						},
						onCompleted: setBookAppointment(true)
					});
				}}
			>
				<Input
					name={"full name"}
					placeHolder={"Full Name"}
					handleValue={handleFullName}
				/>
				<Input name={"email"} placeHolder={"Email"} handleValue={handleEmail} />
				<Button
					width={189}
					height={58}
					gradientStart={"#00FFD8"}
					gradientEnd={"#ACBFBB"}
					text={"Submit"}
					type={"submit"}
				/>
			</form>
			{mutationLoading && <p>Loading...</p>}
			{mutationError && <p>{mutationError.message}}</p>}
			{bookAppointment === true && mutationLoading === false ? (
				// Put a react router link here to allow user to book appointment ?
				// But must be able to access the mutation response
				// Might need to set the mutation res to state and access via context
				// Look into useEffect, this may be the best method instead of the callback method useMutation uses
				<Link to="booking-form">
					<button>Book Now!</button>
				</Link>
			) : null}
		</div>
	);
};

export default NewClientForm;
