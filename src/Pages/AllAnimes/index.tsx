import Navbar from '../../Components/Navbar/Navbar';
import { SectionContainer } from '../../Components/SectionContainer';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { MoviePagination } from '../../Components/MoviePagination';
import { Footer } from '../../Components/Footer';
import { api } from '../../services/api';
import { AnimePagination } from '../../Components/AnimePagination';
import { Link } from 'react-router-dom';

export const AllAnimes = () => {
  const [anime, setAnime] = useState<any[]>([]);
  const [info, setInfo] = useState<any>([]);
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
        console.log(info);
      })
      .catch((err) => console.log(err));
  }, [offset]);

  return (
    <Styled.AllMoviesWrapper>
      <Navbar />
      <h1>All Animes</h1>
      <SectionContainer>
        <Styled.Wrapper>
          {anime.map((anime) => (
            <Link to={`/anime/${anime.id}`} key={anime.id}>
              <Styled.Movieone key={anime.id}>
                <Styled.Movie>
                  <Styled.MovieImg
                    style={{
                      backgroundImage: `url(${anime.attributes.posterImage.medium})`,
                    }}
                  />
                  <Styled.MovieName>
                    {anime.attributes.canonicalTitle}
                  </Styled.MovieName>
                </Styled.Movie>
              </Styled.Movieone>
            </Link>
          ))}
        </Styled.Wrapper>
      </SectionContainer>
      {info.meta && (
        <AnimePagination
          limit={12}
          total={info.meta.count}
          offset={offset}
          setOffSet={setOffSet}
        />
      )}
      <Footer />
    </Styled.AllMoviesWrapper>
  );
};
