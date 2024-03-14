import { FC } from "react";
import { Button } from "../Button";
import { ForwardIcon } from "../Icon";
export interface NextButtonProps {
  isLast: boolean;
  onChange: () => void;
}
export const NextButton: FC<NextButtonProps> = (props) => {
  const { isLast, onChange } = props;
  return (
    <Button className="p-0 w-8 h-8" disabled={isLast} onClick={onChange}>
      <ForwardIcon className="w-6 h-6" />
    </Button>
  );
};
