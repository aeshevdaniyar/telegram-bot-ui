import { cn } from "@/lib/cn";
import { BottomNavigation } from "@components/organisms/bottom-navigation";
import { Header } from "@components/organisms/header";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
export type Layouts = "default" | "promtInput" | "promtAttackFile";

export interface LayoutContextState {
  layout: Layouts;
  promtInputLayout: () => void;
  defaultLayout: () => void;
  promtAttackFileLayout: () => void;
}

const LayoutContext = createContext<LayoutContextState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used within a provider");
  }
  return context;
};

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [layout, setLayout] = useState<Layouts>("default");

  const promtInputLayout = () => {
    setLayout("promtInput");
  };

  const defaultLayout = () => {
    setLayout("default");
  };

  const promtAttackFileLayout = () => {
    setLayout("promtAttackFile");
  };

  return (
    <LayoutContext.Provider
      value={{
        layout,
        promtAttackFileLayout,
        defaultLayout,
        promtInputLayout,
      }}
    >
      <Header />
      <main
        className={cn("pt-8 main", {
          ["main-paddding-bottom"]: layout == "promtInput",
          ["pb-8"]: layout == "default",
        })}
      >
        {children}
      </main>
      <BottomNavigation />
    </LayoutContext.Provider>
  );
};
