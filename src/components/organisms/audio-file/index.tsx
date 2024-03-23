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
import { AudioProgress } from "./progress";
import { formattedTime } from "./utils";
export interface AudioFileProps {
  type: "request" | "response";
  fileName: string;
  url?: string;
}
export const AudioFile: FC<AudioFileProps> = (props) => {
  const { type, fileName, url } = props;

  const [audio, state, controls] = useAudio({
    src: url || "https://cdn.pixabay.com/audio/2024/02/27/audio_b0df7463a4.mp3",
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

      <HStack className="items-center">
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
        <Stack className="w-full gap-2.5 relative">
          <HStack className="justify-between items-center">
            <Text className="font-normal text-sm">{fileName}</Text>
            <Text className="font-normal absolute right-0" size={"xs"}>
              {formattedTime(state.duration)}
            </Text>
          </HStack>
          <AudioProgress value={(state.time / state.duration) * 100} />
        </Stack>
      </HStack>
    </FileCard>
  );
};
