import { FaBars } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './styles';

export type MenuProps = { toggle?: React.MouseEventHandler<HTMLDivElement> };
export const Menu = ({ toggle }: MenuProps) => {
  const itemsSize = useSelector((state) => state.items.length);

  return (
    <Styled.WrapperMenu>
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
          <Link to="/animes">Anime</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <Link to="/">Movie</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <Link to="/allmovies">List Movie</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <Link to="/allanimes">List Anime</Link>
        </Styled.MenuLink>
        <Styled.MenuLink>
          <Link to="/favorites">
            <AiFillStar />
            {itemsSize}
          </Link>
        </Styled.MenuLink>
      </Styled.MenuLinks>
    </Styled.WrapperMenu>
  );
};
