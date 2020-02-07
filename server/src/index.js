import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import 'dotenv/config';
import cors from 'cors';

import resolvers from './api/resolvers.js';
import schema from './api/schema.js';

const app = express();
app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
});

server.applyMiddleware({app, path: '/graphql'});

app.listen({port: process.env.PORT || 8000}, () => {
	console.log('Apollo Server running on http://localhost:8000/graphql');
});