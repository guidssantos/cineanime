import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { AnimePagination } from '../AnimePagination';

export const CardHome = () => {
  const [anime, setAnime] = useState<any[]>([]);
  const [info, setInfo] = useState([]);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    api
      .get(`anime?`, {
        params: {
          page: {
            limit: 12,
            offset,
          },
        },
      })
      .then((response) => {
        setAnime(response.data.data);
        setInfo(response.data);

        console.log(anime);
      })
      .catch((err) => console.log(err));
  }, [offset]);

  return (
    <>
      <Styled.AnimeWrapper>
        {anime.map((anime) => (
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
        ))}
      </Styled.AnimeWrapper>
      {info.meta && (
        <AnimePagination
          limit={12}
          total={info.meta.count}
          offset={offset}
          setOffSet={setOffSet}
        />
      )}
    </>
  );
};
