import { FC, HTMLAttributes } from "react";
import { Box } from "../Box";
import { cn } from "@/lib/cn";
export interface FileCardProps extends HTMLAttributes<HTMLDivElement> {
  type: "response" | "request";
}
export const FileCard: FC<FileCardProps> = ({ className, type, ...props }) => {
  return (
    <Box
      className={cn(
        "rounded-xl p-4 max-w-72 w-full",
        type == "response" && "bg-white",
        type == "request" && "bg-muted",
        className
      )}
      {...props}
    />
  );
};
