import { cn } from "@/lib/cn";
import { FC, InputHTMLAttributes } from "react";

export interface PromtSearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const PromtSearchInput: FC<PromtSearchInputProps> = ({
  className,
  ...props
}) => {
  return (
    <input
      placeholder="Введите свой запрос"
      className={cn(
        "flex border-secondary-foreground border-2 w-full rounded-xl outline-none py-4 pl-14 pr-20 file:border-0 file:bg-transparent text-base font-medium placeholder:text-secondary/50  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};
