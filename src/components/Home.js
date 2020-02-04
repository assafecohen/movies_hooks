import React, { Fragment, useState } from 'react';
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  IMAGE_BASE_URL,
  BACKDROP_SIZE
} from '../config';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import MovieThumb from './elements/MovieThumb';

//custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };
  const loadMoreMovies = () => {
    const searcEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;

    const endPoint = searchTerm ? searcEndPoint : popularEndpoint;
    fetchMovies(endPoint);
  };

  if (error) return <div>Something went wrong ...</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <Fragment>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
          title={state.heroImage.original_title}
          text={state.heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movie'}>
        {state.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable // deafult true when no value
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (
        <LoadMoreBtn text='Load More' callback={loadMoreMovies} />
      )}
    </Fragment>
  );
};

export default Home;
