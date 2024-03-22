import "video-react/dist/video-react.css";
import { FC } from "react";
import { Player, PlayerProps } from "video-react";
export interface VideoPlayerProps {
  videoProps: PlayerProps;
}
export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
  const { videoProps } = props;
  return <Player {...videoProps} />;
};
