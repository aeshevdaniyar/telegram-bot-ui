import { useMemo, useReducer } from "react";
import { generatePages } from "./helper";

type PaginationAction = {
  type: "CHANGE_PAGE";
  payload: number;
};

interface PaginationState {
  currentPage: number;
  pages: number[];
  pagesQuantity: number;
  innerLimit: number;
  outerLimit: number;
}

const reducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case "CHANGE_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
        pages: generatePages({
          currentPage: action.payload,
          innerLimit: state.innerLimit,
          outerLimit: state.outerLimit,
          pagesQuantity: state.pagesQuantity,
        }),
      };
    }
    default: {
      return state;
    }
  }
};

interface usePaginationProps {
  pagesQuantity: number;
  currentPage: number;
  innerLimit: number;
  outerLimit: number;
}
export const usePagination = (props: usePaginationProps) => {
  const initial = useMemo(() => {
    return {
      currentPage: props.currentPage,
      pages: generatePages(props),
      pagesQuantity: props.pagesQuantity,
      innerLimit: props.innerLimit,
      outerLimit: props.outerLimit,
    };
  }, [props]);
  const [state, dispatch] = useReducer(reducer, initial);

  const onNext = () => {
    if (state.currentPage != props.pagesQuantity) {
      dispatch({
        type: "CHANGE_PAGE",
        payload: state.currentPage + 1,
      });
    }
  };

  const onPrev = () => {
    if (state.currentPage != 0) {
      dispatch({
        type: "CHANGE_PAGE",
        payload: state.currentPage - 1,
      });
    }
  };

  const onChange = (page: number) => {
    dispatch({
      type: "CHANGE_PAGE",
      payload: page,
    });
  };

  const isLast = state.currentPage == props.pagesQuantity;
  const isFirst = state.currentPage == 1;
  return {
    state,
    onPrev,
    onNext,
    isLast,
    isFirst,
    onChange,
  };
};
