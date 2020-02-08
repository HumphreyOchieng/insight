import {gql} from 'apollo-server-express';

const schema = gql`
	type Query {
		hello: String,
		reviews: [Review!]!,
		reviewsByLink (link: String!): [Review!]!
	}

	type Review {
		name: String!,
		message: String!,
		sentiment: Sentiment!
	}

	type Sentiment {
		score: Int!,
		comparative: Float!,
		positive: [String]!,
		negative: [String]!
	}
`;

export default schema;