import { DownloadIcon, TrashIcon } from "@components/atoms/Icon";
import { FileBase } from "@components/molecules/file-base";
import VideoFileIcon from "@assets/VideoSquareIcon.svg";
import { FC } from "react";
interface VideoFileProps {
  type: "request" | "response";
}
export const VideoFile: FC<VideoFileProps> = (props) => {
  const { type } = props;
  const onDownload = () => {};
  return (
    <FileBase
      actionIcon={type == "response" ? <DownloadIcon /> : <TrashIcon />}
      fileIcon={<img src={VideoFileIcon} />}
      fileName="Видео с тигром"
      fileSize={22.0}
      onActionClick={onDownload}
      type={type}
    />
  );
};
