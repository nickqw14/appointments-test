import React from "react";

const BookingForm = ({ location }) => {
	return (
		<div>
			<h1>Hello {location.state.user.first_name}, book your Appointment</h1>
		</div>
	);
};

export default BookingForm;
