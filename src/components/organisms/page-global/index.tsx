import { GlobalLoader } from "@components/molecules/global-loader";
import { FC, PropsWithChildren, Suspense } from "react";

export const PageGlobal: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<GlobalLoader />}>{children}</Suspense>;
};
