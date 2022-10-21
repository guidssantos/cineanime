import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export const AnimeBanner = () => {
  const [anime, setAnime] = useState<any[]>([]);

  useEffect(() => {
    api
      .get(`anime/2`)
      .then((response) => {
        setAnime([response.data.data]);
        console.log(anime);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Wrapper>
      {anime.map((anime, indice) => (
        <Styled.HomeBanner key={indice}>
          <Styled.BannerImg
            style={{
              backgroundImage: `url(${anime.attributes.coverImage.large})`,
            }}
          />
          {/* <Styled.BannerText>
              <Styled.BannerTitle>Weather With You</Styled.BannerTitle>
              <Styled.BannerDescription>
                Corrupt politicians, frenzied nationalists, and other
                warmongering forces constantly jeopardize the thin veneer of
                peace between neighboring countries Ostania and Westalis.
              </Styled.BannerDescription>
            </Styled.BannerText> */}
        </Styled.HomeBanner>
      ))}
    </Styled.Wrapper>
  );
};
