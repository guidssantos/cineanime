import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ItemActions from '../../store/modules/favorite/actions';
import * as Styled from './styles';
import { movieapi } from '../../services/movieapi';
import { moviekey } from '../../services/moviekey';

import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import { Footer } from '../../Components/Footer';

export const IndividualMovie = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const movie_path = 'https://image.tmdb.org/t/p/original';

  const dispatch = useDispatch();

  useEffect(() => {
    movieapi
      .get(`movie/${id}`, {
        params: {
          api_key: moviekey,
        },
      })
      .then((response) => {
        setMovie([response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddItem(movie) {
    dispatch(ItemActions.addToFavorite(movie));
  }

  return (
    <Styled.Wrapper>
      <Navbar />
      <SectionContainer>
        <Styled.MovieBackground>
          {movie.map((movie) => (
            <Styled.MovieWrapper key={movie.id}>
              <Styled.MovieImgWrapper>
                <Styled.MovieImg src={`${movie_path}${movie.poster_path}`} />
              </Styled.MovieImgWrapper>
              <Styled.MovieText>
                <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
                <Styled.MovieDesc>{movie.overview}</Styled.MovieDesc>
                <Styled.MovieDate>
                  Release Date: {movie.release_date}
                </Styled.MovieDate>
                <Styled.MovieStatus>Status: {movie.status}</Styled.MovieStatus>
                <Styled.MovieVotes>
                  Average Votes: {movie.vote_average}
                </Styled.MovieVotes>
                <Styled.MovieGenres>
                  <span>Genres:</span>
                  {movie.genres.map((movie) => (
                    <span key={movie.id}>{movie.name}</span>
                  ))}
                </Styled.MovieGenres>
                <Styled.ButtonsWrapper>
                  <Styled.Buttons onClick={() => handleAddItem(movie)}>
                    Add Favorite
                  </Styled.Buttons>
                  <a href={movie.homepage} target="_blank" rel="noreferrer">
                    <Styled.Buttons>Know More</Styled.Buttons>
                  </a>
                </Styled.ButtonsWrapper>
              </Styled.MovieText>
            </Styled.MovieWrapper>
          ))}
        </Styled.MovieBackground>
      </SectionContainer>
      <Footer />
    </Styled.Wrapper>
  );
};
