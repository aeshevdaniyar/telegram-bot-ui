import { DownloadIcon } from "@components/atoms/Icon";
import { FileBase } from "@components/molecules/file-base";
import TxtIcon from "@assets/TxtIcon.svg";
import { FC } from "react";
export interface TxtFileProps {
  type: "request" | "response";
}
export const TxtFile: FC<TxtFileProps> = (props) => {
  const { type } = props;
  const onDownload = () => {};
  return (
    <FileBase
      actionIcon={<DownloadIcon />}
      fileIcon={<img src={TxtIcon} />}
      fileName="Txt File"
      fileSize={22.0}
      onActionClick={onDownload}
      type={type}
    />
  );
};
