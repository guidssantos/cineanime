import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export const AnimeRealease = () => {
  const [anime, setAnime] = useState<any[]>([]);

  useEffect(() => {
    api
      .get(`anime?`, {
        params: {
          page: {
            limit: 12,
          },
        },
      })
      .then((response) => {
        setAnime(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.AnimeWrapper>
      {anime.map((anime) => (
        <Link to={`/anime/${anime.id}`} key={anime.id}>
          <Styled.AnimeOne key={anime.id}>
            <Styled.Anime>
              <Styled.AnimeImg
                style={{
                  backgroundImage: `url(${anime.attributes.posterImage.medium})`,
                }}
              />
              <Styled.AnimeName>
                {anime.attributes.canonicalTitle}
              </Styled.AnimeName>
            </Styled.Anime>
          </Styled.AnimeOne>
        </Link>
      ))}
    </Styled.AnimeWrapper>
  );
};
