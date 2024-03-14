import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
interface options {
  onCopy?: (value: string) => void;
  timeout?: number;
}
export const useClipboard = (text: string, props?: options) => {
  const [isCopied, setCopy] = useState(false);
  useEffect(() => {
    if (isCopied) {
      const tmp = setTimeout(() => {
        setCopy(false);
      }, props?.timeout || 3000);

      return () => {
        clearTimeout(tmp);
      };
    }
  }, [isCopied, props?.timeout]);

  const handleCopy = () => {
    setCopy(true);
    props?.onCopy && props.onCopy(text);
    copy(text);
  };

  return {
    isCopied,
    handleCopy,
    text,
  };
};
