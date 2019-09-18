import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CLIENTS } from "./Queries";

const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>There was an error</div>;

	const inlineStyles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		width: "100px",
		height: "100px"
	};
	const { clients } = data;
	return (
		<div>
			<h1>My Clients</h1>
			{clients.map(client => {
				return (
					<div style={inlineStyles}>
						<span>{client.first_name}</span>
						<span>{client.last_name}</span>
						<span>{client.email}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Clients;
