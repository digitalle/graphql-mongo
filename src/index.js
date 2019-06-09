import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from 'mongoose';

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";




//const mongoose = require('mongoose');



const startServer = async () => {

    const app = express();

    const server = new ApolloServer({
        // These will be defined for both new or existing servers
        typeDefs,
        resolvers,
    });


    server.applyMiddleware({ app }); // app is from an existing express app

    await mongoose.connect('mongodb+srv://mongodbgeeza:Casper20182018@cluster0-h8ga2.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


    app.listen({ port: 4000 }, () =>
        console.log(`� Server ready at http://localhost:4000${server.graphqlPath}`)
    );

};

startServer();
