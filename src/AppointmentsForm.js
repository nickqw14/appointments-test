import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { gql } from "apollo-boost";

const AppointmentsForm = ({ clientID }) => {
	const CREATE_APPOINTMENT = gql`
		mutation insert_appointments(
			$client_id: uuid
			$time: timetz
			$date: date
			$service_type: String!
		) {
			insert_appointments(
				objects: [
					{
						client_id: $client_id
						time: $time
						date: $date
						service_type: $service_type
					}
				]
			) {
				returning {
					time
					date
					service_type
				}
			}
		}
	`;
	const [appDate, setDate] = useState("");
	const [time, setTime] = useState("");
	const [serviceType, setService] = useState("");

	const [createAppointment, { data }] = useMutation(CREATE_APPOINTMENT);

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					createAppointment({
						variables: {
							client_id: clientID[0],
							time: time,
							date: appDate,
							service_type: serviceType
						}
					});
				}}
			>
				<input
					onChange={e => setDate(e.target.value)}
					placeholder={"Date"}
					type="text"
				></input>
				<input
					onChange={e => setTime(e.target.value)}
					placeholder={"Time"}
					type="text"
				></input>
				<input
					onChange={e => setService(e.target.value)}
					placeholder={"Service"}
					type="text"
				></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AppointmentsForm;
