import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './styles';
import { AiFillStar } from 'react-icons/ai';

const Sidebar = ({ isOpen, toggle }: Styled.SidebarProps) => {
  const itemsSize = useSelector((state: any) => state.items.length);

  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink onClick={toggle} href="#">
            <Link to="/">Movie</Link>
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            <Link to="/allmovies">List Movie</Link>
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            <Link to="/animes">Anime</Link>
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            <Link to="/allanimes">List Anime</Link>
          </Styled.SidebarLink>
          <Styled.SidebarLink>
            <Link to="/favorites">
              <AiFillStar />
              {itemsSize}
            </Link>
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
