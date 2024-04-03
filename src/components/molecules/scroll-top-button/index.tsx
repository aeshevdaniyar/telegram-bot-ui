import { Button } from "@components/atoms/Button";
import { ChevronUpIcon } from "lucide-react";
import { FC } from "react";
export interface ScrollTopButtonProps {
  onClick: () => void;
}
export const ScrollTopButton: FC<ScrollTopButtonProps> = (props) => {
  const { onClick } = props;
  return (
    <Button className=" p-0 h-10 w-10 " onClick={onClick}>
      <ChevronUpIcon />
    </Button>
  );
};
