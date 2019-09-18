import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { gql } from "apollo-boost";
import { get } from "http";
import AppointmentsForm from "./AppointmentsForm";

const ClientsForm = ({ setClientForm }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

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

	const inlineStyles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		width: "400px",
		height: "400px"
	};

	const handleOnSubmit = () => {
		// First Run Query to See if Email Exists
		// If it returns true then display already registered
	};

	const [createClient, { data }] = useMutation(CREATE_CLIENT);

	return (
		<div style={inlineStyles}>
			<h1>Enter Your Info</h1>
			<button onClick={() => setClientForm(false)}></button>
			<form
				onSubmit={e => {
					e.preventDefault();
					createClient({
						variables: {
							first_name: firstName,
							last_name: lastName,
							email: email
						}
					});
				}}
			>
				<input
					onChange={e => setFirstName(e.target.value)}
					placeholder={"First Name"}
					type="text"
				></input>
				<input
					onChange={e => setLastName(e.target.value)}
					placeholder={"Last Name"}
					type="text"
				></input>
				<input
					onChange={e => setEmail(e.target.value)}
					placeholder={"Email"}
					type="email"
				></input>
				<button type="submit">Submit</button>
			</form>
			{data &&
				data.insert_clients.returning.map(item => (
					<div>Thank you for booking, {item.first_name}</div>
				))}
			{data && (
				<AppointmentsForm
					clientID={data.insert_clients.returning.map(client => client.id)}
				/>
			)}
		</div>
	);
};

export default ClientsForm;
