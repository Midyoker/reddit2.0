// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "ttps://buluan.stepzen.net/api/coy-marmot/__graphql",
    headers:{
        Authorization: 'Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}'
    },
    cache: new InMemoryCache(),
});

export default client;