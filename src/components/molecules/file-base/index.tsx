import { cn } from "@/lib/cn";
import { Button } from "@components/atoms/Button";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";

import { FC, ReactNode } from "react";

export interface FileBaseProps {
  type: "response" | "request";
  actionIcon: ReactNode;
  fileIcon: ReactNode;
  onActionClick: () => void;
  fileName: string;
  fileSize: number;
}
export const FileBase: FC<FileBaseProps> = (props) => {
  const { actionIcon, fileIcon, fileName, onActionClick, type, fileSize } =
    props;

  const onClick = () => {
    onActionClick();
  };
  return (
    <FileCard type={type} className="relative ">
      <HStack className="items-center justify-between">
        <HStack className="items-center">
          <HStack
            className={cn(
              " min-w-11 h-11 items-center justify-center p-1.5 rounded-md [&>img]:w-full [&>img]:h-full",
              type == "response" && "bg-muted",
              type == "request" && "bg-white"
            )}
          >
            {fileIcon}
          </HStack>

          <Stack className="gap-0">
            <Text className="font-normal">{fileName}</Text>
            <Text className="font-normal text-secondary" size={"xs"}>
              {fileSize} MB
            </Text>
          </Stack>
        </HStack>

        <Button
          className={cn(
            "w-8 h-8 p-0 rounded-full ",
            type == "response" && "bg-muted",
            type == "request" && "bg-white"
          )}
          onClick={onClick}
          variant={"ghost"}
        >
          {actionIcon}
        </Button>
      </HStack>
    </FileCard>
  );
};
