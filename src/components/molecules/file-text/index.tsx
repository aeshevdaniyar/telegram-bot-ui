import { Button } from "@components/atoms/Button";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
export interface FileTextProps {
  iconImg: string;
  title: string;
  onDelete: () => void;
}
export const FileText: FC<FileTextProps> = (props) => {
  const { iconImg, title } = props;
  return (
    <FileCard>
      <HStack className="items-center">
        <img src={iconImg} />
        <Text>{title}</Text>
        <Button></Button>
      </HStack>
    </FileCard>
  );
};
