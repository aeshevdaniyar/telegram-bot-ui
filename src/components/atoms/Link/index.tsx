import { cn } from "@/lib/cn";
import { FC, HTMLAttributes } from "react";
import { LinkProps, Link as RouterLink } from "react-router-dom";
export interface LinkHrefProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {}

export const LinkHref: FC<LinkHrefProps> = ({ className, ...props }) => {
  return (
    <RouterLink
      className={cn("text-primary underline", className)}
      {...props}
    />
  );
};
