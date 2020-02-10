import Layout from "../components/Layout";
import Profile from "../components/User/Profile";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import withData from "../hasura.config";

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

const Account = () => {
  return (
    <Layout>
      <Query // <- Wrapping the main component with Query component from react-apollo
        query={query}
        fetchPolicy={"cache-and-network"}
      >
        {({ loading, data, error }) => {
          if (error) {
            return <div>Error..</div>;
          }
          return (
            <div>
              <Profile user={data.user[0]} />
            </div>
          );
        }}
      </Query>
    </Layout>
  );
};

export default withData(Account);
