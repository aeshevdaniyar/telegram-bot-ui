import { cn } from "@/lib/cn";
import {
  AudioSquare,
  CameraIcon,
  FolderIcon,
  GalleryIcon,
  VideoSquare,
} from "@components/atoms/Icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/atoms/Popover";
import { FC, ReactNode } from "react";
export interface AttachPopoverProps {
  side: "left" | "right";
  children?: ReactNode;
}
export const AttachPopover: FC<AttachPopoverProps> = ({ children, side }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-36 p-0",
          side == "left" && "ml-8",
          side == "left" && "mr-8"
        )}
      >
        <ul className="grid grid-cols-1 divide-y justify-center">
          <li className="flex  pl-5  items-center gap-2 py-1.5 cursor-pointer transition-all text-secondary hover:bg-primary hover:text-white rounded-t-md active:bg-primary active:text-white">
            <CameraIcon className="h-4.5 w-h.5" />
            Фото
          </li>
          <li className="flex  pl-5 items-center gap-2 py-1.5 cursor-pointer transition-all text-secondary hover:bg-primary hover:text-white active:bg-primary active:text-white">
            <GalleryIcon className="h-4.5 w-4.5 " />
            Картина
          </li>
          <li className="flex  pl-5 items-center gap-2 py-1.5 cursor-pointer transition-all text-secondary hover:bg-primary hover:text-white active:bg-primary active:text-white">
            <AudioSquare className="h-4.5 w-4.5 " />
            Аудио
          </li>
          <li className="flex pl-5 items-center gap-2 py-1.5 cursor-pointer transition-all text-secondary hover:bg-primary hover:text-white active:bg-primary active:text-white">
            <VideoSquare className="h-4.5 w-4.5 " />
            Видео
          </li>
          <li className="flex pl-5  items-center gap-2 py-1.5 cursor-pointer transition-all text-secondary hover:bg-primary hover:text-white rounded-b-md active:bg-primary active:text-white">
            <FolderIcon className="h-4.5 w-4.5 " />
            Файл
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
