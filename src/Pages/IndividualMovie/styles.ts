import styled, { css } from 'styled-components';
import { WrapperMenu } from '../../Components/Menu/styles';
export const Wrapper = styled.main`
${({ theme }) => css`
${WrapperMenu}{
  background-color: #192026;
}
`}
`;

export const MovieBackground = styled.div`
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

export const MovieWrapper = styled.div`
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

export const MovieImgWrapper = styled.div`
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

export const MovieImg = styled.img`
width: 100%;
height: 100%;
`;

export const MovieText = styled.div`
${({ theme }) => css`
*{
  color: black;
}
@media ${theme.media.lteMedium}{
  text-align: center;
}

`}
`;

export const MovieTitle = styled.h1`
max-width: 600px;
`;

export const MovieDesc = styled.p`
${({ theme }) => css`
width: 600px;

@media ${theme.media.lteMedium}{
  width: 400px;
}

@media ${theme.media.lteSmall}{
  width: 100%;
  font-size: 13px;
}
`}
`;

export const MovieDate = styled.p``;

export const MovieStatus = styled.p``;

export const MovieVotes = styled.p``;

export const MovieGenres = styled.p`
span{
  padding-right: 10px;
}
`;

export const Buttons = styled.button`
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
margin-right: 2rem;

&:last-child{
  margin-right: 0;
}

&:hover{
  background-color: transparent;
  color: black;
  border: 1px solid black;
}

&:active{
  transform: scale(90%);
}

@media ${theme.media.lteSmall}{
margin-right: 0;
margin-bottom: 1rem;

&:last-child{
  margin-bottom: 0;
}
}
`}
`;
export const ButtonsWrapper = styled.div`
${({ theme }) => css`
@media ${theme.media.lteSmall}{
  display: flex;
  flex-direction: column;
  align-items: center;
}

`}
`;
