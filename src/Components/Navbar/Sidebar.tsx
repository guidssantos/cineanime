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
            Movie
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            List Movie
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            Anime
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            List Anime
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
