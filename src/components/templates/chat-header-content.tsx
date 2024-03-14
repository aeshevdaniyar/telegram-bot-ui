import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightElement,
  HeaderTitle,
} from "@components/organisms/page-header";
import { FC, ReactNode } from "react";

interface ChatHeaderContentProps {
  aiLogo: string;
  aiName: string;
  rightElement: ReactNode;
}
export const ChatHeaderContent: FC<ChatHeaderContentProps> = ({
  aiLogo,
  aiName,
  rightElement,
}) => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={aiLogo} />
      </HeaderLogo>
      <HeaderTitle>{aiName}</HeaderTitle>
      <HeaderRightElement>{rightElement}</HeaderRightElement>
    </HeaderContainer>
  );
};
