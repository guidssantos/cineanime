import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { moviekey } from '../services/moviekey';
import { movieapi } from '../services/movieapi';
import { Link } from 'react-router-dom';

export const MovieRelease = () => {
  const [movie, setMovie] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    movieapi
      .get('movie/now_playing', {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie(response.data.results.slice(0, 12));
        console.log(movie);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.MovieWrapper>
      {movie.map((movie) => (
        <Link to={`movie/${movie.id}`} key={movie.id}>
          <Styled.Movieone key={movie.id}>
            <Styled.Movie>
              <Styled.MovieImg
                style={{
                  backgroundImage: `url(${image_path}${movie.poster_path})`,
                }}
              />
              <Styled.MovieName>{movie.title}</Styled.MovieName>
            </Styled.Movie>
          </Styled.Movieone>
        </Link>
      ))}
    </Styled.MovieWrapper>
  );
};
