import { useState, useEffect } from "react";

import { Audio } from "./use-voice-recorder";
import generateKey from "@/lib/generate-key";
import { deleteAudio } from "@/handlers/recorder-list";

export default function useRecordingsList(audio: string | null) {
  const [recordings, setRecordings] = useState<Audio[]>([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState: Audio[]) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
  };
}
