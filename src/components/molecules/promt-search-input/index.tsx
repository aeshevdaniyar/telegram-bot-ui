import { cn } from "@/lib/cn";
import {
  FC,
  MutableRefObject,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef,
} from "react";

export interface PromtSearchInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onInputSubmit?: () => void;
}

export const PromtSearchInput: FC<PromtSearchInputProps> = ({
  className,
  onChange,
  onInputSubmit,
  ...props
}) => {
  const textbox = useRef(null) as MutableRefObject<HTMLTextAreaElement | null>;
  useLayoutEffect(adjustHeight, []);
  function adjustHeight() {
    if (textbox.current) {
      textbox.current.style.height = "inherit";
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onInputSubmit && onInputSubmit();
      }}
    >
      <textarea
        placeholder="Введите свой запрос"
        className={cn(
          "flex resize-none overflow-hidden  border-secondary-foreground border-2 w-full rounded-xl outline-none pt-3.5 pb-4.5 pl-14 pr-20 file:border-0 file:bg-transparent text-base font-medium placeholder:text-secondary/50  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        rows={1}
        onChange={(e) => {
          onChange && onChange(e);
          adjustHeight();
        }}
        ref={textbox}
        {...props}
      />
    </form>
  );
};
