import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { DownloadIcon, GalleryIcon, TrashIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
import WordIcon from "@assets/WordIcon.svg";
import TxtIcon from "@assets/TxtIcon.svg";
export interface FileBase {
  type: "response" | "request";
}

export interface FileRequestImageProps extends FileBase {
  onDelete: () => void;
  src: string;
}

export const FileRequestImage: FC<FileRequestImageProps> = (props) => {
  const { onDelete, src } = props;
  return (
    <Box className="bg-file-img-bg  h-46 w-46 relative rounded-xl">
      <img src={src} className="max-w-full h-auto rounded-xl" />
      <Button
        className="w-8 h-8 p-0 rounded-full bg-white absolute top-2 right-2"
        onClick={onDelete}
      >
        <TrashIcon />
      </Button>
    </Box>
  );
};

export interface FileResponseProps extends FileBase {
  onDownload: () => void;
  fileName: string;
  fileSize: number;
  fileType: "image" | "word" | "txt";
}

export const FileResponseImage: FC<FileResponseProps> = (props) => {
  const { onDownload, type, fileName, fileSize, fileType } = props;
  return (
    <FileCard type={type} className="relative ">
      <HStack className="items-center justify-between">
        <HStack className="items-center">
          <HStack className="bg-muted w-11 h-11 items-center justify-center p-1.5 rounded-md">
            {fileType == "image" && <GalleryIcon />}
            {fileType == "word" && <img src={WordIcon} />}
            {fileType == "txt" && <img src={TxtIcon} />}
          </HStack>

          <Stack className="gap-0">
            <Text size={"lg"} className="font-normal">
              {fileName}
            </Text>
            <Text className="font-normal text-secondary" size={"sm"}>
              {fileSize} MB
            </Text>
          </Stack>
        </HStack>

        <Button
          className="w-8 h-8 p-0 rounded-full  bg-muted"
          onClick={onDownload}
        >
          <DownloadIcon />
        </Button>
      </HStack>
    </FileCard>
  );
};
