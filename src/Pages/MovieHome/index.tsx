import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { movieapi } from '../../services/movieapi';
import { moviekey } from '../../services/moviekey';
import { MovieCard } from '../../Components/MovieCard';

export const MovieHome = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieapi
      .get('movie/popular', {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie(response.data);
        console.log(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Styled.Wrapper>
      <Navbar />
      <Styled.BannerBackground>
        <article>
          <MovieCard />
        </article>
      </Styled.BannerBackground>
    </Styled.Wrapper>
  );
};
