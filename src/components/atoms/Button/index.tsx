import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";

import { ReactNode, forwardRef } from "react";
import { Loader2 } from "lucide-react";
const buttonVariants = cva(
  "inline-flex relative items-center gap-2 vela-base-regular text-white justify-center whitespace-nowrap rounded-xl transition-all   disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-transparent border-2 hover:bg-primary/90 active:shadow-inner  active:border-blue",
        filled:
          "bg-primary border-transparent border-2 hover:bg-primary/90 active:shadow-inner  active:border-blue",
        outline:
          "border-2 border-secondary-foreground text-foreground hover:bg-secondary-foreground active:shadow-inner",
        ghost: "text-black",
        secondary: "bg-secondary-foreground text-foreground",
      },
      size: {
        default: "py-2.5 px-6",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      children,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...(isLoading && {
          disabled: true,
        })}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin" />}
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);
