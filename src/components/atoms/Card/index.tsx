import { cn } from "@/lib/cn";
import { FC, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("border-2 border-muted py-4.5 px-6 rounded-xl", className)}
      {...props}
    />
  );
};
