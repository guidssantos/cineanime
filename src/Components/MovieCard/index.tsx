import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { moviekey } from '../../services/moviekey';
import { movieapi } from '../../services/movieapi';

export const MovieCard = () => {
  const [movie, setMovie] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    movieapi
      .get('movie/popular', {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
        console.log(movie);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.AnimeWrapper>
      {movie.map((movie) => (
        <Styled.AnimeOne key={movie.id}>
          <Styled.Anime>
            <Styled.AnimeImg
              style={{
                backgroundImage: `url(${image_path}${movie.poster_path})`,
              }}
            />
            <Styled.AnimeName>{movie.title}</Styled.AnimeName>
          </Styled.Anime>
        </Styled.AnimeOne>
      ))}
    </Styled.AnimeWrapper>
  );
};
