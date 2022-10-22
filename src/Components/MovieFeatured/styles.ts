import styled, { css } from 'styled-components';
export const MovieWrapper = styled.ul`
${({ theme }) => css`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`}
`;

export const Movieone = styled.li`
${({ theme }) => css`
  text-align: center;
  margin-bottom: ${theme.spacings.large};

  &:hover{
    div{
    transform: rotate(5deg) scale(1.2);
    }
  }

   @media ${theme.media.lteSmall}{
    margin: 4px;
  }

`}
`;

export const Movie = styled.span`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 170px;
  height: 300px;
  overflow: hidden;

  @media ${theme.media.lteSmall}{
    width: 77px;
    height: 150px;
  }
  `}
`;

export const MovieImg = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  filter: brightness(65%);
  transition: ease-in-out all 300ms;
  background-size: cover;
  background-position: center;



&:hover{
  filter: brightness(85%);
}
`;

export const MovieName = styled.h4`
${({ theme }) => css`
  padding-top: ${theme.spacings.xsmall};
  font-size: 14px;
  font-weight: 600;
  max-width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;

  @media ${theme.media.lteSmall}{
    font-size: 8px;
  }
  `}
`;
