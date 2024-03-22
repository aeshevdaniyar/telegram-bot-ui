import { formatMinutes, formatSeconds } from "@/lib/format-time";

export const formattedTime = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec - minutes * 60);
  return `${formatMinutes(minutes)}:${formatSeconds(seconds)}`;
};
