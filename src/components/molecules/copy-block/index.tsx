import { Text } from "@components/atoms/Text";
import { FC } from "react";
export interface CopyBlockProps {
  text: string;
}
export const CopyBlock: FC<CopyBlockProps> = (props) => {
  const { text } = props;
  return (
    <div className="bg-muted rounded-xl px-4 py-3.5">
      <Text className="font-normal">{text}</Text>
    </div>
  );
};
