import { cn } from "@/lib/cn";
import { Box, BoxProps } from "@components/atoms/Box";
import { FC } from "react";
export interface ImageGalleryProps extends BoxProps {}
export const ImageGallery: FC<ImageGalleryProps> = ({
  className,
  ...props
}) => {
  return <Box className={cn("grid grid-cols-2", className)} {...props} />;
};
