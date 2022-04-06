import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const API_URI = `${ process.env.NEXT_PUBLIC_SERVER_URL }/graphql`

const apolloClient = new ApolloClient( {
    uri: API_URI,
    cache: new InMemoryCache()
} );

export default withApollo( apolloClient );