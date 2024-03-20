import { FC, PropsWithChildren } from "react";
import { PageHeaderProvider } from "./page-header-provider";
import { TelegramProvider } from "@/telegram";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      <PageHeaderProvider>{children}</PageHeaderProvider>
    </TelegramProvider>
  );
};
