import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import { useEffect, useState } from 'react';
import { moviekey } from '../../services/moviekey';
import { movieapi } from '../../services/movieapi';
import * as Styled from './styles';
import { MoviePagination } from '../../Components/MoviePagination';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const AllMovies = () => {
  const [movie, setMovie] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);

  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    movieapi
      .get('movie/popular', {
        params: {
          api_key: moviekey,
          page: page + 1,
        },
      })
      .then((response) => {
        setMovie(response.data.results.slice(0, 12));
        setInfo(response.data);
        console.log(info);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <Styled.AllMoviesWrapper>
      <Navbar />
      <h1>All Movies</h1>
      <SectionContainer>
        <Styled.Wrapper>
          {movie.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
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
        </Styled.Wrapper>
      </SectionContainer>
      {info.total_pages && (
        <MoviePagination
          limit={1}
          total={info.total_pages}
          offset={page}
          setOffSet={setPage}
        />
      )}
      <Footer />
    </Styled.AllMoviesWrapper>
  );
};
