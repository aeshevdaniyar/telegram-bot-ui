import { FC, ReactNode } from "react";
import classes from "./image.module.css";
import { Dialog, DialogContent, DialogTrigger } from "./image-dialog";
export interface ImageProps {
  children: ReactNode;
}

export const Image: FC<ImageProps> = (props) => {
  const { children } = props;
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={classes.Image}>{children}</DialogContent>
    </Dialog>
  );
};
