/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { CardHome } from '../../Components/AnimeCard';
import { AnimeBanner } from '../../Components/AnimeBanner';

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
          <Styled.AnimeTitle> New Realease </Styled.AnimeTitle>
          <CardHome />
        </article>
      </SectionContainer>
    </Styled.Wrapper>
  );
};
