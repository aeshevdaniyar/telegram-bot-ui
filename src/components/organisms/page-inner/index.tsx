import { InnerLoader } from "@components/molecules/inner-loader";
import { FC, PropsWithChildren, Suspense } from "react";

export const PageInner: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<InnerLoader />}>{children}</Suspense>;
};
