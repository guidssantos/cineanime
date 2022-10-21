import * as Styled from './styles';

export type SectionBackgroundProps = { title?: string };
export const SectionBackground = ({ title }: SectionBackgroundProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};
