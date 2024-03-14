import { cn } from "@/lib/cn";
import { FC, HTMLAttributes } from "react";
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}
export const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return <div className={cn("max-w-2xl mx-auto px-5", className)} {...props} />;
};
