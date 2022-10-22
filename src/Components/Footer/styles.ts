import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  background-color: #181b1f;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    color: white;
  }
`}
`;
