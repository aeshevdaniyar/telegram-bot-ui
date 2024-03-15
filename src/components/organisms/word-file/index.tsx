import { DownloadIcon } from "@components/atoms/Icon";
import { FileBase } from "@components/molecules/file-base";
import WordFileIcon from "@assets/WordIcon.svg";
import { FC } from "react";
export interface WordFileProps {
  type: "request" | "response";
}
export const WordFile: FC<WordFileProps> = (props) => {
  const { type } = props;
  const onDownload = () => {};
  return (
    <FileBase
      actionIcon={<DownloadIcon />}
      fileIcon={<img src={WordFileIcon} />}
      fileName="Word File"
      fileSize={22.0}
      type={type}
      onActionClick={onDownload}
    />
  );
};
