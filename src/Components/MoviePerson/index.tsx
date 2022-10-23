import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { moviekey } from '../../services/moviekey';
import { movieapi } from '../../services/movieapi';

export const MoviePerson = () => {
  const [movie, setMovie] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    movieapi
      .get('person/popular', {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie(response.data.results.slice(1, 13));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.MovieWrapper>
      {movie.map((movie) => (
        <Styled.Movieone key={movie.id}>
          <Styled.Movie>
            <Styled.MovieImg
              style={{
                backgroundImage: `url(${image_path}${movie.profile_path})`,
              }}
            />
            <Styled.MovieName>{movie.name}</Styled.MovieName>
          </Styled.Movie>
        </Styled.Movieone>
      ))}
    </Styled.MovieWrapper>
  );
};
