import { Link } from "react-router-dom";
import LogoIcon from "@assets/logo.svg";
import { Box } from "@components/atoms/Box";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Box className={cn(className)} {...props}>
      <Link className="h-full" to="/">
        <img className="max-w-full" src={LogoIcon} alt="logo" />
      </Link>
    </Box>
  );
};
