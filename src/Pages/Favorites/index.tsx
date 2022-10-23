import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as itemActions from '../../store/modules/favorite/actions';
import Navbar from '../../Components/Navbar/Navbar';
import { Movie, MovieImg, MovieName, Movieone } from '../AllAnimes/styles';
import { Footer } from '../../Components/Footer';
import { CiSquareRemove } from 'react-icons/ci';

export const Favorites = () => {
  const dispatch = useDispatch();
  const image_path = 'https://image.tmdb.org/t/p/w500';

  const item = useSelector((state) =>
    state.items.map((item) => ({
      ...item,
    })),
  );

  function remove(item) {
    dispatch(itemActions.removeFromFavorite(item.id));
  }

  return (
    <>
      <Styled.Wrapper>
        <Navbar />
        <h2>Favorites</h2>
        {item.length > 0 ? (
          <Styled.ItemsWrapper>
            {item.map((item) => (
              <Movieone key={item.id}>
                {item.title ? (
                  <>
                    <Movie>
                      <MovieImg
                        style={{
                          backgroundImage: `url(${image_path}${item.poster_path})`,
                        }}
                      />

                      <MovieName>{item.title}</MovieName>
                    </Movie>
                    <Styled.ButtonRemove
                      type="button"
                      onClick={() => remove(item)}
                    >
                      <CiSquareRemove />
                    </Styled.ButtonRemove>
                  </>
                ) : (
                  <>
                    <Movie>
                      <MovieImg
                        style={{
                          backgroundImage: `url(${item.attributes.posterImage.large})`,
                        }}
                      />

                      <MovieName>{item.attributes.canonicalTitle}</MovieName>
                    </Movie>
                    <Styled.ButtonRemove
                      type="button"
                      onClick={() => remove(item)}
                    >
                      <CiSquareRemove />
                    </Styled.ButtonRemove>
                  </>
                )}
              </Movieone>
            ))}
          </Styled.ItemsWrapper>
        ) : (
          <Styled.Nothing> You have nothing in favorites</Styled.Nothing>
        )}
      </Styled.Wrapper>
      <Footer />
    </>
  );
};
