import { FC, PropsWithChildren } from "react";
import { PageHeaderProvider } from "./page-header-provider";
import { TelegramProvider } from "@/telegram";
import { ApiClientProvider } from "@/lib/query";
import { BACKEND_URL } from "@constants/backend-url";
import { queryClient } from "@constants/queryClient";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      <ApiClientProvider
        baseUrl={BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
        }}
      >
        <PageHeaderProvider>{children}</PageHeaderProvider>
      </ApiClientProvider>
    </TelegramProvider>
  );
};
