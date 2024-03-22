import useRecordingsList from "@/hooks/use-recordings-list";
import { RecordingsListProps } from "@/hooks/use-voice-recorder";
import { Stack } from "@components/atoms/Stack";
import { AudioFile } from "../audio-file";

export const AudioRecordList = ({ audio }: RecordingsListProps) => {
  const { recordings } = useRecordingsList(audio);

  return (
    <Stack>
      {recordings?.map(({ audio, key }) => {
        return (
          <AudioFile
            key={key}
            url={audio}
            type="request"
            fileName="Голосовое сообшение"
          />
        );
      })}
    </Stack>
  );
};
