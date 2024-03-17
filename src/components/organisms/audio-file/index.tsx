import PlayIcon from "@assets/AudioFileIcon.svg";
import { Box } from "@components/atoms/Box";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import Swap from "@components/atoms/Swap";
import { Text } from "@components/atoms/Text";
import { PauseCircleIcon } from "lucide-react";
import { FC } from "react";

import { useAudio } from "react-use";
import { formattedTime } from "./utils";
import { AudioProgress } from "./progress";
export interface AudioFileProps {
  type: "request" | "response";
  fileName: string;
}
export const AudioFile: FC<AudioFileProps> = (props) => {
  const { type, fileName } = props;
  const [audio, state, controls] = useAudio({
    src: "https://cdn.pixabay.com/audio/2024/02/27/audio_b0df7463a4.mp3",
  });

  const onSwapClick = () => {
    if (state.playing) {
      controls.pause();
      return;
    }
    controls.play();
  };
  return (
    <FileCard type={type}>
      {audio}
      <HStack>
        <Box className="min-w-11 h-11 rounded-full">
          <Swap
            offElement={<img src={PlayIcon} />}
            onElement={
              <PauseCircleIcon className="min-w-11 h-11 text-primary" />
            }
            value={state.playing}
            onChange={onSwapClick}
            rotate
          />
        </Box>
        <Stack className="w-full gap-2.5">
          <HStack className="justify-between items-center">
            <Text className="font-normal">{fileName}</Text>
            <Text className="font-normal" size={"xs"}>
              {formattedTime(state.duration)}
            </Text>
          </HStack>
          <AudioProgress value={(state.time / state.duration) * 100} />
        </Stack>
      </HStack>
    </FileCard>
  );
};
