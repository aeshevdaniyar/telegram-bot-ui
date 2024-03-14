import { FC, HTMLAttributes } from "react";
import { Box } from "../Box";
import { cn } from "@/lib/cn";
export interface FileCardProps extends HTMLAttributes<HTMLDivElement> {}
export const FileCard: FC<FileCardProps> = ({ className, ...props }) => {
  return <Box className={cn("bg-muted p-4", className)} {...props} />;
};
