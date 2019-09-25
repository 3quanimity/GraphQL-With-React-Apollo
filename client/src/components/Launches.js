import React, { Component, Fragment } from 'react';
// gql is used to make the queries
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

//creating the query, just like in the graphiql interface
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className='display-4 my-3'>Launches</h1>
        <MissionKey />
        {/* injecting our custom query into a Query object  */}
        <Query query={LAUNCHES_QUERY}>
          {/* arrow function inside of a js  */}
          {/* loading is a boolean  */
          ({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
