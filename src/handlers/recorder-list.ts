import { SetRecordings } from "@/hooks/use-voice-recorder";

export function deleteAudio(audioKey: string, setRecordings: SetRecordings) {
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}
