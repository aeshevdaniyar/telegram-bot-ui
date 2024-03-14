import { FC } from "react";
import { usePagination } from "./use-pagination";
import { Container } from "./container";
import { Button } from "../Button";
import { NextButton } from "./next-button";
import { PrevButton } from "./prev-button";
import { SEPARATORS } from "./helper";

export interface PaginationProps {
  pagesQuantity: number;
  currentPage: number;
  innerLimit: number;
  outerLimit: number;
  onChange: (value: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { onChange, ...paginationProps } = props;
  const {
    isFirst,
    isLast,
    onChange: onChangePage,
    onNext,
    onPrev,
    state,
  } = usePagination({
    ...paginationProps,
  });
  const onPaginationChange = (page: number) => {
    onChangePage(page);
    onChange(page);
  };
  return (
    <Container>
      <PrevButton isFirst={isFirst} onChange={onPrev} />
      {state.pages.map((page) => {
        if (SEPARATORS.left == page) {
          return (
            <Button variant={"ghost"} className="w-8 h-8 p-0">
              ...
            </Button>
          );
        }
        if (SEPARATORS.right == page) {
          return (
            <Button variant={"ghost"} className="w-8 h-8 p-0">
              ...
            </Button>
          );
        }
        return (
          <li>
            <Button
              className="w-8 h-8 p-0"
              onClick={() => onPaginationChange(page)}
              {...(state.currentPage != page && {
                variant: "ghost",
              })}
              {...(state.currentPage == page && {
                variant: "filled",
              })}
            >
              {page}
            </Button>
          </li>
        );
      })}
      <NextButton isLast={isLast} onChange={onNext} />
    </Container>
  );
};
