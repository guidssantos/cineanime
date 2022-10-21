import * as Styled from './styles';

export type AnimePaginationProps = {
  limit?: number;
  total?: number;
  offset?: number;
  setOffSet?: Node;
};

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const AnimePagination = ({
  limit,
  total,
  offset,
  setOffSet,
}: AnimePaginationProps) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffSet((page - 1) * limit);
  }

  return (
    <Styled.Wrapper>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <Styled.ButtonPagination onClick={() => onPageChange(page)}>
              {page}
            </Styled.ButtonPagination>
          </li>
        ))}
    </Styled.Wrapper>
  );
};
