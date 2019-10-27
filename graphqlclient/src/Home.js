import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => {
  return (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>Error</span>;
        return data.movies.map(movie => {
          return (
            <h2 key={movie.id}>
              {movie.title} / {movie.rating}
            </h2>
          );
        });
      }}
    </Query>
  );
};

export default Home;
