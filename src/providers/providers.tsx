import { FC, PropsWithChildren } from "react";
import { PageHeaderProvider } from "./page-header-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <PageHeaderProvider>{children}</PageHeaderProvider>;
};
