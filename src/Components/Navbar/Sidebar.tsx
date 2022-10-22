import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

const Sidebar = ({ isOpen, toggle }: Styled.SidebarProps) => {
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
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
