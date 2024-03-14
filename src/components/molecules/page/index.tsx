import { FC, PropsWithChildren, Suspense } from "react";
const Loading = () => (
  <div className="bg-grey-5 text-grey-90 flex h-screen w-full items-center justify-center">
    Loading
  </div>
);
export const Page: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
