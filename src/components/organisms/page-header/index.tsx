import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import { HStack } from "@components/atoms/HStack";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
interface PageHeaderContextState {
  content: ReactNode;
  changeHeaderContent: (content: ReactNode) => void;
}

const PageHeaderContext = createContext<PageHeaderContextState | null>(null);

export const usePageHeader = () => {
  const context = useContext(PageHeaderContext);

  if (!context) {
    throw new Error("usePageHeader must be used within a provider");
  }
  return context;
};

export const PageHeaderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setСontent] = useState<ReactNode>(<></>);

  const changeHeaderContent = (content: ReactNode) => {
    setСontent(content);
  };

  return (
    <PageHeaderContext.Provider
      value={{
        content,
        changeHeaderContent,
      }}
    >
      {children}
    </PageHeaderContext.Provider>
  );
};

export interface PageHeaderProps {
  pageContent: ReactNode;
}
export const PageHeader: FC<PropsWithChildren<PageHeaderProps>> = ({
  pageContent,
  children,
}) => {
  const { changeHeaderContent } = usePageHeader();
  useEffect(() => {
    changeHeaderContent(pageContent);
  }, [changeHeaderContent, pageContent]);
  return <>{children}</>;
};
export interface HeaderLogoProps extends HTMLAttributes<HTMLDivElement> {}
export const HeaderLogo: FC<HeaderLogoProps> = ({ className, ...props }) => {
  return <Box className={cn("absolute left-0 ", className)} {...props} />;
};

export const HeaderContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container className="h-header">
      <HStack className="items-center justify-center relative h-full">
        {children}
      </HStack>
    </Container>
  );
};

export interface HeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const HeaderTitle: FC<HeaderTitleProps> = ({ className, ...props }) => {
  return <Text className={cn(className)} size={"lg"} {...props} />;
};
export interface HeaderRightElementProps
  extends HTMLAttributes<HTMLDivElement> {}
export const HeaderRightElement: FC<HeaderRightElementProps> = ({
  className,
  ...props
}) => {
  return <Box className={cn("absolute right-0 ", className)} {...props} />;
};
