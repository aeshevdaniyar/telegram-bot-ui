import PlayIcon from "@assets/AudioFileIcon.svg";
import { Box } from "@components/atoms/Box";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import Swap from "@components/atoms/Swap";
import { Text } from "@components/atoms/Text";
import { PauseCircleIcon } from "lucide-react";
import { FC, useState } from "react";
import useSound from "use-sound";
export interface AudioFileProps {
  type: "request" | "response";
  fileName: string;
}
export const AudioFile: FC<AudioFileProps> = (props) => {
  const { type, fileName } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(
    "https://cdn.uppbeat.io/audio-files/b7c9c31af312304d2baa0b6434e93928/9b6a9328765c82b3c7ef068d9cd22bf3/105b9e81fff736a3a1a6e580ca93f019/STREAMING-pencil-writing-joshua-chivers-1-00-02.mp3",
    {
      onend() {
        setIsPlaying(false);
      },
    }
  );

  const onSwapClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      return;
    }

    play();
    setIsPlaying(true);
  };
  return (
    <FileCard type={type}>
      <HStack>
        <Box className="min-w-11 h-11 rounded-full">
          <Swap
            offElement={<img src={PlayIcon} />}
            onElement={
              <PauseCircleIcon className="w-full h-full text-primary" />
            }
            value={isPlaying}
            onChange={onSwapClick}
            rotate
          />
        </Box>
        <Stack className="w-full gap-2.5">
          <HStack className="justify-between items-center">
            <Text className="font-normal">{fileName}</Text>
            <Text className="font-normal" size={"xs"}>
              12 секунд
            </Text>
          </HStack>
          <Box className="h-0.5 bg-[#D9D9D9]">
            <Box className="bg-primary w-full h-full" />
          </Box>
        </Stack>
      </HStack>
    </FileCard>
  );
};
