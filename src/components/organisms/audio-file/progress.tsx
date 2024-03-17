import { Box } from "@components/atoms/Box";
import { FC } from "react";
export interface AudioProgressProps {
  value: number;
}
export const AudioProgress: FC<AudioProgressProps> = (props) => {
  const { value } = props;
  return (
    <Box className="h-0.5 bg-[#D9D9D9]">
      <Box
        className="bg-primary h-full"
        style={{
          width: `${value}%`,
        }}
      />
    </Box>
  );
};
