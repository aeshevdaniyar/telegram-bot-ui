import { DownloadIcon, TrashIcon } from "@components/atoms/Icon";
import { FileBase } from "@components/molecules/file-base";
import ImageIcon from "@assets/ImageFileIcon.svg";
import { FC } from "react";
export interface ImageFileProps {
  type: "request" | "response";
}
export const ImageFile: FC<ImageFileProps> = (props) => {
  const { type } = props;
  const onDownload = () => {};
  return (
    <FileBase
      actionIcon={type == "response" ? <DownloadIcon /> : <TrashIcon />}
      fileIcon={<img src={ImageIcon} />}
      fileName="Картинка"
      fileSize={22.0}
      onActionClick={onDownload}
      type={type}
    />
  );
};
