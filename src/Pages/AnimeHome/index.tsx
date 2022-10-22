/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { AnimeRealease } from '../../Components/AnimeRealease';
import { AnimeBanner } from '../../Components/AnimeBanner';
import { AnimeFeatured } from '../../Components/AnimeFeatured';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const AnimeHome = () => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <SectionContainer>
        <article>
          <Styled.HomeTitle>Explore</Styled.HomeTitle>
          <Styled.HomeSubtitle>
            What are you gonna watch today ?
          </Styled.HomeSubtitle>
          <AnimeBanner />
          <Styled.AnimeTitle>
            <h1>New Realease</h1> <Link to="/allanimes">See More {'>'} </Link>
          </Styled.AnimeTitle>
          <AnimeRealease />
          <Styled.AnimeTitle>
            <h1>Featured Anime</h1> <Link to="/allanimes">See More {'>'} </Link>
          </Styled.AnimeTitle>
          <AnimeFeatured />
        </article>
      </SectionContainer>
      <Footer />
    </Styled.Wrapper>
  );
};
