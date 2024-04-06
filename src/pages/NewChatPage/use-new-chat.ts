import qs from "qs";
import { useMemo } from "react";
export interface NewChatQueryParams {
  code: string;
  icon: string;
  name: string;
  pk: string;
}
export const useNewChat = (queryString: string) => {
  if (queryString[0] == "?") {
    queryString = queryString.substring(1);
  }

  const initalState = useMemo(() => parseQuery(queryString), [queryString]);
  const getAiInfo = () => {
    if (
      initalState.code ||
      initalState.pk ||
      initalState.name ||
      initalState.icon
    ) {
      return initalState;
    }

    return null;
  };
  return { aiinfo: getAiInfo() };
};

export const parseQuery = (queryString: string): NewChatQueryParams => {
  const filters = qs.parse(queryString);
  const defValue: NewChatQueryParams = {
    code: "",
    icon: "",
    name: "",
    pk: "",
  };
  for (const [key, value] of Object.entries(filters)) {
    switch (key) {
      case "code": {
        if (typeof value == "string") {
          defValue.code = value;
        }
        break;
      }
      case "icon": {
        if (typeof value == "string") {
          defValue.icon = value;
        }
        break;
      }
      case "name": {
        if (typeof value == "string") {
          defValue.name = value;
        }
        break;
      }
      case "pk": {
        if (typeof value == "string") {
          defValue.pk = value;
        }
        break;
      }
    }
  }

  return defValue;
};
