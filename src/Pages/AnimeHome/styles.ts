import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
  background-color: #192026;
`;

export const HomeTitle = styled.h1``;

export const HomeSubtitle = styled.h4`
${({ theme }) => css`
  color: ${theme.colors.secondary};
  font-weight: 400;
  padding-bottom: 10px;
`}
`;

export const AnimeTitle = styled.div`
${({ theme }) => css`
   display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 5px;
  padding-top: 20px;


  @media ${theme.media.lteSmall}{
 h1{
    font-size: 16px;
  }
  a{
    font-size: 12px;
  }
  }
`}
`;

export const SeeAllAnimes = styled.h1`
${({ theme }) => css`
  padding-top: ${theme.spacings.small};
  `}
`;
