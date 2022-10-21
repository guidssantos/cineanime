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

export const AnimeTitle = styled.h2`
  padding: 40px 0;
`;

export const SeeAllAnimes = styled.h1`
${({ theme }) => css`
  padding-top: ${theme.spacings.small};
  `}
`;
