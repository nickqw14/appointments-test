import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_APPOINTMENTS } from "./Queries";

const Appointments = () => {
	const { loading, error, data } = useQuery(GET_APPOINTMENTS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>There was an error</div>;

	const { appointments } = data;

	const inlineStyles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		width: "100px",
		height: "100px"
	};
	return (
		<div>
			<h1>Appointments</h1>
			{appointments.map(appointment => {
				return (
					<div style={inlineStyles} key={appointment.id}>
						<span>{appointment.client.first_name}</span>
						<span>{appointment.client.last_name}</span>
						<span>{appointment.time}</span>
						<span>{appointment.date}</span>
						<span>{appointment.service_type}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Appointments;
