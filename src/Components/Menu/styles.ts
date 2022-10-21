import styled, { css } from 'styled-components';
export const Wrapper = styled.nav`
${({ theme }) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`}
`;

export const MenuLogo = styled.div``;

export const Logo = styled.h1`
${({ theme }) => css`
`}
`;

export const MenuLinks = styled.ul`
 @media screen and (max-width: 768px){
            display:none;
        }
`;

export const MenuLink = styled.li`
${({ theme }) => css`
  display: inline;
  padding-right: ${theme.font.sizes.large};

  a{
  color: ${theme.colors.secondary};
  font-weight: 400;
  transition: ease-in-out all 300ms;
  }

  a:hover{
    color: white;
  }
  `}
`;

export const InputSearch = styled.input`
${({ theme }) => css`
  background-color: #374151;
  padding: 8px ${theme.spacings.large};
  border-radius: 37px;
  border: 0;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.55);
  color: white;

  &:focus-visible{
    outline: 0;
  }

`}
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:  translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;
