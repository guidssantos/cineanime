import styled, { css } from 'styled-components';
export const Wrapper = styled.main`
${({ theme }) => css`

`}
`;

export const BannerBackground = styled.div`
`;

export const MovieTitle = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;

  h1, a{
  color: black;
  }

  @media ${theme.media.lteSmall}{

  h1{
    font-size: 16px;
  }
  a{
    font-size: 12px;
  }

  padding-top: 20px;
  }
  `}
`;
