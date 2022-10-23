import styled, { css } from 'styled-components';
import { WrapperMenu } from '../../Components/Menu/styles';
export const Wrapper = styled.div`
${({ theme }) => css`
min-height: 95vh;

h2{
  color: black;
  text-align: center;
  margin-top: 2rem;
}

span{
  color: black;
}

${WrapperMenu}{
  background-color: #192026;
}

`}
`;

export const ItemsWrapper = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 4rem 4rem;

li{
  margin-right: 2rem;
}
a{
cursor: auto;
}
`;

export const ButtonRemove = styled.button`
background-color: transparent;
margin-top: 1rem;
cursor: pointer;

svg{
  height: 30px;
  width: 30px;
}
`;

export const Nothing = styled.div`
text-align: center;
padding-top: 5rem;
`;
