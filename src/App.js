import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./index";
import Fork from "./Onboarding/containers/Fork";
import NewClientForm from "./Onboarding/containers/NewClientForm";
import ExistingClientForm from "./Onboarding/containers/ExistingClientForm";
import BookingForm from "./Onboarding/containers/BookingForm";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Router>
					<Route exact path="/" component={Fork} />
					<Route exact path="/new-client" component={NewClientForm} />
					<Route path="/existing-client" component={ExistingClientForm} />
					<Route path="/booking-form" component={BookingForm} />
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
