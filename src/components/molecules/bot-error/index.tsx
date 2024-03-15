import { Box } from "@components/atoms/Box";
import { FC, PropsWithChildren } from "react";

export const BotError: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      children={children}
      className="py-3 px-6 rounded-xl border-2 border-accent-red text-accent-red"
    />
  );
};
