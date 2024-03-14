import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const textVariants = cva("text-foreground", {
  variants: {
    size: {
      xs: "vela-xs-semibold",
      sm: "vela-sm-semibold",
      md: "vela-base-semibold",
      lg: "vela-lg-semibold",
      xl: "vela-xl-semibold",
    },
  },

  defaultVariants: {
    size: "md",
  },
});
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text: FC<TextProps> = ({ className, size, ...props }) => {
  return <p className={cn(textVariants({ size, className }), className)} {...props} />;
};
