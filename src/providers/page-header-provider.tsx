import { PageHeaderProvider as Provider } from "@components/organisms/page-header";
import { FC, PropsWithChildren } from "react";

export const PageHeaderProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
