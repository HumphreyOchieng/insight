import {gql} from 'apollo-server-express';

const schema = gql`
	type Query {
		name: String!
	}
`;

export default schema;