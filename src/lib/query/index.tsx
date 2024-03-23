import { FC, PropsWithChildren, createContext, useContext } from "react";
import {
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";
import ApiClient from "../api";
export interface ApiClientContextState {
  client: ApiClient;
}
const ApiClientContext = createContext<ApiClientContextState | null>(null);

export const useApiClient = () => {
  const context = useContext(ApiClientContext);

  if (!context) {
    throw new Error("useValantis must be used within a provider");
  }
  return context;
};
export interface ApiClientProviderProps {
  queryClientProviderProps: QueryClientProviderProps;
  baseUrl: string;
  apiClient?: ApiClient;
}
export const ApiClientProvider: FC<
  PropsWithChildren<ApiClientProviderProps>
> = (props) => {
  const {
    baseUrl,
    queryClientProviderProps,
    apiClient = new ApiClient({
      baseUrl,
    }),
    children,
  } = props;

  return (
    <QueryClientProvider {...queryClientProviderProps}>
      <ApiClientContext.Provider
        value={{
          client: apiClient,
        }}
      >
        {children}
      </ApiClientContext.Provider>
    </QueryClientProvider>
  );
};
