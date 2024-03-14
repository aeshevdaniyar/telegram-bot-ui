import { cn } from "@/lib/cn";
import { FC, HTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex border-input-border border w-full rounded-md  outline-none px-4.5 py-3 file:border-0 file:bg-transparent text-lg font-medium placeholder:text-input-paceholder  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {}

const InputGroup: FC<InputGroupProps> = ({ className, ...props }) => {
  return <div className={cn("relative ", className)} {...props} />;
};

InputGroup.displayName = "InputGroup";
export interface InputElementProps extends HTMLAttributes<HTMLDivElement> {}
const InputLeftElement: FC<InputElementProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "absolute z-10 inset-y-0 start-0 flex items-center ps-3.5",
        className
      )}
      {...props}
    />
  );
};

const InputRightElement: FC<InputElementProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "absolute z-10 inset-y-0 end-0 flex items-center pe-3 ",
        className
      )}
      {...props}
    />
  );
};
InputLeftElement.displayName = "InputLeftElement";
InputRightElement.displayName = "InputRightElement";
export { Input, InputGroup, InputLeftElement, InputRightElement };
