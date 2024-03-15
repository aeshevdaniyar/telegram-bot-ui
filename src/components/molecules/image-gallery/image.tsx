import { FC, ReactNode } from "react";
import classes from "./image.module.css";
import { Dialog, DialogContent, DialogTrigger } from "./image-dialog";
import { Box } from "@components/atoms/Box";
import { ImageActions } from "./image-actions";

export interface ImageProps {
  children: ReactNode;
}

export const Image: FC<ImageProps> = (props) => {
  const { children } = props;
  return (
    <Dialog>
      <DialogTrigger>
        <Box className="h-36 md:h-76.5 [& > img]:w-full [& > img]:h-full [& > img]:max-w-none relative">
          {children}
          <ImageActions />
        </Box>
      </DialogTrigger>
      <DialogContent className={classes.Image}>{children}</DialogContent>
    </Dialog>
  );
};
