import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import { Footer } from '../../Components/Footer';
import { api } from '../../services/api';

export const IndividualAnime = () => {
  const [anime, setAnime] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`anime/${id}`)
      .then((response) => {
        setAnime([response.data.data.attributes]);
        console.log(anime);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Wrapper>
      <Navbar />
      <SectionContainer>
        <Styled.AnimeBackground>
          {anime.map((anime) => (
            <Styled.AnimeWrapper key={anime.id}>
              <Styled.AnimeImgWrapper>
                <Styled.AnimeImg src={`${anime.posterImage.large}`} />
              </Styled.AnimeImgWrapper>
              <Styled.AnimeText>
                <Styled.AnimeTitle>{anime.canonicalTitle}</Styled.AnimeTitle>
                <Styled.AnimeDesc>{anime.description}</Styled.AnimeDesc>
                <Styled.AnimeDate>
                  Release Date: {anime.endDate}
                </Styled.AnimeDate>
                <Styled.AnimeStatus>Status: {anime.status}</Styled.AnimeStatus>
                <Styled.AnimeVotes>
                  Average Votes: {anime.averageRating}
                </Styled.AnimeVotes>
              </Styled.AnimeText>
            </Styled.AnimeWrapper>
          ))}
        </Styled.AnimeBackground>
      </SectionContainer>
      <Footer />
    </Styled.Wrapper>
  );
};
