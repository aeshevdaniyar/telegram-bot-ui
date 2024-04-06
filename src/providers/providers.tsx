import { FC, PropsWithChildren } from "react";
import { PageHeaderProvider } from "./page-header-provider";
import { TelegramProvider } from "@/telegram";
import { ApiClientProvider } from "@/lib/query";
import { BACKEND_URL } from "@constants/backend-url";
import { queryClient } from "@constants/queryClient";
import { TelegramGuard } from "@/telegram/telegram-guard";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      <TelegramGuard>
        <ApiClientProvider
          baseUrl={BACKEND_URL}
          queryClientProviderProps={{
            client: queryClient,
          }}
        >
          <PageHeaderProvider>{children}</PageHeaderProvider>
        </ApiClientProvider>
      </TelegramGuard>
    </TelegramProvider>
  );
};
