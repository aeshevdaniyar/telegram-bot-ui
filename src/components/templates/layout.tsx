import { BottomNavigation } from "@components/organisms/bottom-navigation";
import { Header } from "@components/organisms/header";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-8 main main-paddding-bottom">{children}</main>
      <BottomNavigation />
    </>
  );
};
