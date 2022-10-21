import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`

`}
`;

export const HomeBanner = styled.div`
display: inline-block;
position: relative;
width: 1136px;
height: 388px;
`;

export const BannerImg = styled.div`
position: relative;
width: 100%;
height: 100%;
background-attachment: fixed;
background-size: cover;
background-position: center;
filter: brightness(80%);
transition: ease-in-out all 300ms;


&:hover{
  filter: brightness(100%);
}
`;

export const BannerText = styled.div`
  padding: 10px;
`;

export const BannerTitle = styled.h4`
`;

export const BannerDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: white;
  width: 400px;
`;
