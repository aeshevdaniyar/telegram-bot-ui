import { AiModel } from "@/lib/api/types";
import qs from "qs";
import { useMemo, useReducer } from "react";
export interface AiModelsState {
  offset: number;
  limit: number;
  type?: AiModelsType;
  aimodels: AiModel[];
}

export type AiModelsType = "text" | "image";

export type AiModelsAction =
  | {
      type: "setLimit";
      payload: number;
    }
  | {
      type: "setOffset";
      payload: number;
    }
  | {
      type: "setType";
      payload: AiModelsType;
    }
  | {
      type: "setAiModels";
      payload: AiModel[];
    };

const reducer = (
  state: AiModelsState,
  action: AiModelsAction
): AiModelsState => {
  switch (action.type) {
    case "setLimit": {
      return {
        ...state,
        limit: action.payload,
      };
    }
    case "setOffset": {
      return {
        ...state,
        offset: action.payload,
      };
    }
    case "setType": {
      return {
        ...state,
        type: action.payload,
      };
    }
    case "setAiModels": {
      return {
        ...state,
        aimodels: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export const useAiModelsFilter = (existing?: string) => {
  if (existing && existing[0] == "?") {
    existing = existing.substring(1);
  }
  const initial = useMemo(() => parseQueryString(existing), [existing]);
  const [state, dispatch] = useReducer(reducer, initial);

  const setAiModels = (aimodels: AiModel[]) => {
    dispatch({
      type: "setAiModels",
      payload: aimodels,
    });
  };

  const setOffset = (offset: number) => {
    dispatch({
      type: "setOffset",
      payload: offset,
    });
  };

  const setType = (type: AiModelsType) => {
    dispatch({
      type: "setType",
      payload: type,
    });
  };

  const getFilteredAiModels = () => {
    if (state.type) {
      return state.aimodels.filter(({ type }) => {
        return type == state.type;
      });
    }
    return state.aimodels;
  };

  return { state, setAiModels, setOffset, setType, getFilteredAiModels };
};

const parseQueryString = (queryString?: string): AiModelsState => {
  const defaultVal: AiModelsState = {
    limit: 10,
    offset: 0,
    aimodels: [],
  };
  if (queryString) {
    const filters = qs.parse(queryString);
    for (const [key, value] of Object.entries(filters)) {
      switch (key) {
        case "offset": {
          if (typeof value === "string") {
            defaultVal.offset = parseInt(value);
          }
          break;
        }
        case "limit": {
          if (typeof value === "string") {
            defaultVal.limit = parseInt(value);
          }
          break;
        }

        case "type": {
          if (
            (typeof value == "string" && value == "text") ||
            (typeof value == "string" && value == "image")
          ) {
            defaultVal.type = value;
          }
        }
      }
    }
  }

  return defaultVal;
};
