import { cn } from "@/lib/cn";
import { FC, HTMLAttributes } from "react";

export interface HStackProps extends HTMLAttributes<HTMLDivElement> {}

export const HStack: FC<HStackProps> = ({ className, ...props }) => {
  return <div className={cn("flex flex-row gap-2", className)} {...props} />;
};
