import Layout from "../components/Layout";
import SignIn from "../components/user/SignIn";
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

const Profile = () => {
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

          console.log(data);
          return (
            <div>
              <p className="p-16">Hello, {data.user[0].first_name}!</p>
            </div>
          );
        }}
      </Query>
    </Layout>
  );
};

export default withData(Profile);
