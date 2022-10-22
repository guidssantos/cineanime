import Navbar from '../../Components/Navbar/Navbar';
import * as Styled from './styles';
import { MovieFeatured } from '../../Components/MovieFeatured';
import { MovieBanner } from '../../Components/MovieBanner';
import { SectionContainer } from '../../Components/SectionContainer';
import { MovieRelease } from '../../MovieRelease';
import { Link } from 'react-router-dom';
import { MoviePerson } from '../../Components/MoviePerson';
import { Footer } from '../../Components/Footer';

export const MovieHome = () => {
  return (
    <Styled.Wrapper>
      <MovieBanner />
      <SectionContainer>
        <article>
          <Styled.MovieTitle>
            <h1>Featured Movie</h1> <Link to="/allmovies">See More {'>'} </Link>
          </Styled.MovieTitle>
          <MovieFeatured />
          <Styled.MovieTitle>
            <h1>Release Movie</h1> <Link to="/allmovies">See More {'>'} </Link>
          </Styled.MovieTitle>
          <MovieRelease />
          <Styled.MovieTitle>
            <h1>Featured Casts</h1>
          </Styled.MovieTitle>
          <MoviePerson />
        </article>
      </SectionContainer>
      <Footer />
    </Styled.Wrapper>
  );
};
