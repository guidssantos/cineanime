import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export type MenuProps = { toggle?: React.MouseEventHandler<HTMLDivElement> };
export const Menu = ({ toggle }: MenuProps) => {
  return (
    <Styled.Wrapper>
      <Styled.MenuLogo>
        <Styled.Logo>
          <a>CineAnime</a>
        </Styled.Logo>
      </Styled.MenuLogo>
      <Styled.MobileIcon onClick={toggle}>
        <FaBars />
      </Styled.MobileIcon>
      <Styled.MenuLinks>
        <Styled.MenuLink>
          <Link to="/">Anime</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <Link to="/movies">Movie</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <a>List Movie</a>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <a>List Anime</a>
        </Styled.MenuLink>
        <Styled.InputSearch type="text" placeholder="Search anime or movie" />
      </Styled.MenuLinks>
    </Styled.Wrapper>
  );
};
