import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import { ScrollTopButton } from "@components/molecules/scroll-top-button";
import { BottomNavigation } from "@components/organisms/bottom-navigation";
import { Header } from "@components/organisms/header";
import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { useScroll, useScrolling } from "react-use";
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
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const topPageRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const { y } = useScroll(scrollRef);
  const isScrolling = useScrolling(scrollRef);
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

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const coords = scrollRef.current.getBoundingClientRect();
      const offset = scrollRef.current.scrollHeight - coords.height;

      if (offset == 0) {
        hide();
        return;
      }
      if (offset == y) {
        show();
      } else {
        hide();
      }
      return;
    }
    hide();
  }, [isScrolling, y, pathname]);
  const goToTopPage = useCallback(() => {
    if (topPageRef.current)
      topPageRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [topPageRef]);
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
        className={cn("pt-8 main overflow-x-hidden", {
          ["main-paddding-bottom"]: layout == "promtInput",
          ["pb-8"]: layout == "default",
        })}
        ref={scrollRef}
      >
        <div ref={topPageRef} />
        {children}
        {visible && (
          <Box className="animate-fade-left duration-75 fixed z-20 bottom-24 right-6">
            <ScrollTopButton onClick={goToTopPage} />
          </Box>
        )}
      </main>
      <BottomNavigation />
    </LayoutContext.Provider>
  );
};
