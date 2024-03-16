import testAudio from "@assets/traimory-mega-horn-angry-siren-f-cinematic-trailer-sound-effects-193408.mp3";
import { Box } from "@components/atoms/Box";
import { FileCard } from "@components/atoms/FileCard";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
export interface AudioFileProps {
  type: "request" | "response";
  fileName: string;
}
export const AudioFile: FC<AudioFileProps> = (props) => {
  const { type, fileName } = props;
  console.log(testAudio);

  return (
    <FileCard type={type}>
      <HStack>
        <Box className="min-w-11 h-11 rounded-full"></Box>
        <Stack className="w-full gap-2.5">
          <HStack className="justify-between items-center">
            <Text className="font-normal">{fileName}</Text>
            <Text className="font-normal" size={"xs"}>
              12 секунд
            </Text>
          </HStack>
          <Box className="h-0.5 bg-[#D9D9D9]">
            <Box className="bg-primary w-2/4 h-full" />
          </Box>
        </Stack>
      </HStack>
    </FileCard>
  );
};
