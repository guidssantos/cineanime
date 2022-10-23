import styled, { css } from 'styled-components';
import { WrapperMenu } from '../../Components/Menu/styles';
export const Wrapper = styled.main`
${({ theme }) => css`
${WrapperMenu}{
  background-color: #192026;
}
`}
`;

export const AnimeBackground = styled.div`
${({ theme }) => css`
min-height: 80vh;
display: flex;
align-items: center;

@media ${theme.media.lteMedium}{
  flex-direction: column;
  justify-content: center;
}

`}
`;

export const AnimeWrapper = styled.div`
${({ theme }) => css`
display: flex;
align-items: center;
flex-wrap: wrap;
@media ${theme.media.lteMedium}{
  justify-content: center;
  flex-direction: column;
}
`}
`;

export const AnimeImgWrapper = styled.div`
${({ theme }) => css`
width: 300px;
height: 100%;
margin-right: 6rem;

@media ${theme.media.lteMedium}{
margin-right: 0;
}

@media ${theme.media.lteSmall}{

  width: 200px;
}

`}
`;

export const AnimeImg = styled.img`
width: 100%;
height: 100%;
`;

export const AnimeText = styled.div`
${({ theme }) => css`
*{
  color: black;
}
@media ${theme.media.lteMedium}{
  text-align: center;
}

`}
`;

export const AnimeTitle = styled.h1`
${({ theme }) => css`
max-width: 600px;

@media ${theme.media.lteSmall}{
  font-size: 16px;
}
`}
`;

export const AnimeDesc = styled.p`
${({ theme }) => css`
width: 600px;

@media ${theme.media.lteMedium}{
  width: 100%;
}

@media ${theme.media.lteSmall}{
  font-size: 13px;
}
`}
`;

export const AnimeDate = styled.p``;

export const AnimeStatus = styled.p``;

export const AnimeVotes = styled.p``;

export const AnimeGenres = styled.p`
span{
  padding-right: 10px;
}
`;
