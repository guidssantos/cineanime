import styled, { css } from 'styled-components';
import { MenuLink } from '../Menu/styles';

export const MovieBanner = styled.div`
${({ theme }) => css`
height: 100%;
width: 100%;

${MenuLink}{
  a{
    color: white;
  }

  a:hover{
    color: ${theme.colors.secondary};
  }
}
`}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
width: 100%;
height: 600px;
`}
`;

export const MovieImg = styled.div`
${({ theme }) => css`
width: 100%;
height: 100%;
position: relative;
background-size: 110%;
background-repeat: no-repeat;
background-attachment: fixed;
box-shadow: inset 0px 0px 100px 40px rgba(0,0,0,0.75);

@media (max-width: 1024px){
  background-size:cover;
  background-position: center;
}
`}
`;

export const MovieBannerText = styled.section`
${({ theme }) => css`
position: absolute;
max-width: 400px;
bottom: 10rem;
left: 15rem;

@media ${theme.media.lteSmall}{
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`}
`;

export const Title = styled.h1`
${({ theme }) => css`
@media ${theme.media.lteSmall}{
  font-size: ${theme.font.sizes.small};
}
`}
`;

export const Description = styled.p`
${({ theme }) => css`

color: white;

@media ${theme.media.lteSmall}{
  font-size: 14px;
  text-align: center;
}
`}
`;

export const Button = styled.button`
${({ theme }) => css`
text-transform: uppercase;
color: white;
padding: 15px 30px;
font-weight: 600;
border-radius: 6px;
background-color: red;
border: 1px solid red;
cursor: pointer;
transition: ease-in-out all 300ms;

&:hover{
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
}

&:active{
  transform: scale(95%);
}

`}
`;
