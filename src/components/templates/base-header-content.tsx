import { Logo } from "@components/molecules/logo";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
} from "@components/organisms/page-header";
import { FC } from "react";
export interface BaseHeaderContentProps {
  title: string;
}
export const BaseHeaderContent: FC<BaseHeaderContentProps> = (props) => {
  const { title } = props;

  return (
    <HeaderContainer>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
