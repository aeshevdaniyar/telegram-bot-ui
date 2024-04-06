import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { QuestionMark } from "@components/molecules/question-mark";
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
  amount?: number;
}
export const ChatHeaderContent: FC<ChatHeaderContentProps> = ({
  aiLogo,
  aiName,
  rightElement,
  amount,
}) => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={aiLogo} />
      </HeaderLogo>
      <Stack className="items-center gap-0">
        <HeaderTitle>{aiName}</HeaderTitle>
        {amount && (
          <Text size={"sm"} className="text-center">
            1 запрос = {amount} токенов{" "}
            <QuestionMark popoverText="Text" position="bottom" />
          </Text>
        )}
      </Stack>
      <HeaderRightElement>{rightElement}</HeaderRightElement>
    </HeaderContainer>
  );
};
