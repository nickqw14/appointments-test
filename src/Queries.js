import { gql } from "apollo-boost";

export const GET_APPOINTMENTS = gql`
	{
		appointments {
			time
			date
			service_type
			client {
				first_name
				last_name
			}
		}
	}
`;

export const GET_CLIENTS = gql`
	{
		clients {
			first_name
			last_name
			email
		}
	}
`;
