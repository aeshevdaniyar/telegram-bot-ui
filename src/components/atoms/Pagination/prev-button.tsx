import { FC } from "react";
import { Button } from "../Button";
import { BackwardIcon } from "../Icon";
export interface PrevButtonProps {
  isFirst: boolean;
  onChange: () => void;
}
export const PrevButton: FC<PrevButtonProps> = (props) => {
  const { isFirst, onChange } = props;
  return (
    <Button className="p-0 w-8 h-8" onClick={onChange} disabled={isFirst}>
      <BackwardIcon className="w-6 h-6" />
    </Button>
  );
};
