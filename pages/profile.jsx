import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import withData from "../hasura.config";
import { useFetchUser } from "../lib/user";

const query = gql`
  query {
    user {
      id
      first_name
      last_name
      email
    }
  }
`;

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      <Query // <- Wrapping the main component with Query component from react-apollo
        query={query}
        fetchPolicy={"cache-and-network"}
      >
        {({ loading, data, error }) => {
          if (error) {
            return <div>Error..</div>;
          }
          return <div>Hello </div>;
        }}
      </Query>
    </Layout>
  );
};

export default withData(Profile);
