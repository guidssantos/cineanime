import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as ItemActions from '../../store/modules/favorite/actions';

import * as Styled from './styles';
import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import { Footer } from '../../Components/Footer';
import { api } from '../../services/api';
import { Buttons } from '../IndividualMovie/styles';

export const IndividualAnime = () => {
  const [anime, setAnime] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get(`anime/${id}`)
      .then((response) => {
        setAnime([response.data.data]);
        console.log(anime);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddItem(anime) {
    dispatch(ItemActions.addToFavorite(anime));
  }

  return (
    <Styled.Wrapper>
      <Navbar />
      <SectionContainer>
        <Styled.AnimeBackground>
          {anime.map((anime) => (
            <Styled.AnimeWrapper key={anime.id}>
              <Styled.AnimeImgWrapper>
                <Styled.AnimeImg
                  src={`${anime.attributes.posterImage.large}`}
                />
              </Styled.AnimeImgWrapper>
              <Styled.AnimeText>
                <Styled.AnimeTitle>
                  {anime.attributes.canonicalTitle}
                </Styled.AnimeTitle>
                <Styled.AnimeDesc>
                  {anime.attributes.description}
                </Styled.AnimeDesc>
                <Styled.AnimeDate>
                  Release Date: {anime.attributes.endDate}
                </Styled.AnimeDate>
                <Styled.AnimeStatus>
                  Status: {anime.attributes.status}
                </Styled.AnimeStatus>
                <Styled.AnimeVotes>
                  Average Votes: {anime.attributes.averageRating}
                </Styled.AnimeVotes>
                <Buttons onClick={() => handleAddItem(anime)}>
                  Add Favorite
                </Buttons>
              </Styled.AnimeText>
            </Styled.AnimeWrapper>
          ))}
        </Styled.AnimeBackground>
      </SectionContainer>
      <Footer />
    </Styled.Wrapper>
  );
};
