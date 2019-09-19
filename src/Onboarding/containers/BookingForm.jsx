import React from "react";

const BookingForm = ({ location }) => {
	const getUser = () => {
		console.log(location.state.user);
	};
	return <button onClick={getUser}>Click</button>;
};

export default BookingForm;
