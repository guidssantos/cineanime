import { movieapi } from '../../services/movieapi';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { moviekey } from '../../services/moviekey';
import Navbar from '../Navbar/Navbar';

export type MovieBannerProps = { children?: JSX.Element };
export const MovieBanner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieapi
      .get('movie/458156', {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie([response.data]);
        console.log(movie);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Wrapper>
      {movie.map((movie) => (
        <Styled.MovieBanner key={movie.id}>
          <Styled.MovieImg
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg)`,
            }}
          >
            <Navbar />
            <Styled.MovieBannerText>
              <Styled.Title>{movie.title}</Styled.Title>
              <Styled.Description>{movie.overview}</Styled.Description>
              <a href={movie.homepage} target="_blank" rel="noreferrer">
                <Styled.Button>Watch Trailer</Styled.Button>
              </a>
            </Styled.MovieBannerText>
          </Styled.MovieImg>
        </Styled.MovieBanner>
      ))}
    </Styled.Wrapper>
  );
};
