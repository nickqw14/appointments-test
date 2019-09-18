import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
	uri: "https://react-appointments-test.herokuapp.com/v1/graphql"
});
/*
-I learned about how easy it is to spin up an apollo server with apollo boost.
-useQuery is awesome as it automatically will render other components with its loading and error state.
 It also has several other features/options such as variables, pooling (you specify how often you want it to check for new data)
 refetching is also an option but comes with more complexities. Would be good to look into
*/
/*
TODO
 - Dive much deeper into graphQL queries, subscriptions and mutations. 
  - Next time, write a mutation that will take the appointment time and the client info at the same time.
TODO
 - Look into setting up a hasura/graphQL server from scratch so you can specify the mutations, instead of using defaults
TODO
 - Best Practices for SQL relations (Primary key, Foreign, etc)
  - Possibly reverse it so an Appointment can only exist if it has a client to schedule. 
TODO
 - When the App officially starts getting built how do you secure the API (Apollo client option?)
TODO
 - Advance Apollo config options. 

*/
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
