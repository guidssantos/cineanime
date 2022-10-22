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
min-height: 80vh;
display: flex;
align-items: center;


`;

export const MovieWrapper = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const MovieImgWrapper = styled.div`
width: 300px;
height: 100%;

margin-right: 6rem;
`;

export const MovieImg = styled.img`
width: 100%;
height: 100%;
`;

export const MovieText = styled.div`
*{
  color: black;
}`;

export const MovieTitle = styled.h1`
max-width: 800px;
`;

export const MovieDesc = styled.p`
width: 600px;
`;

export const MovieDate = styled.p``;

export const MovieStatus = styled.p``;

export const MovieVotes = styled.p``;

export const MovieGenres = styled.p`
span{
  padding-right: 10px;
}
`;

export const KnowMore = styled.button`
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
  color: black;
  border: 1px solid black;
}

&:active{
  transform: scale(90%);
}
`}
`;
