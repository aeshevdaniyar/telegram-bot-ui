import { useClipboard } from "@/hooks/use-clipboard";
import { Check } from "lucide-react";
import { Highlight, PrismTheme } from "prism-react-renderer";
import { FC } from "react";
import { Box } from "../Box";
import { HStack } from "../HStack";
import { CopyIcon } from "../Icon";
import { Text } from "../Text";
export interface CodeBlockProps {
  code: string;
}
const theme: PrismTheme = {
  plain: {
    color: "#FEFEFE",
    backgroundColor: "#141718",

  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "#FB692A",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "#FEFEFE",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "#FEFEFE",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#46DEFF",
        fontStyle: "normal",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#FF97E8",
        fontStyle: "normal",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
  ],
};

export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { code } = props;
  const { handleCopy, isCopied } = useClipboard(code);
  return (
    <Box>
      <HStack className="justify-between items-center bg-[#232627] text-white p-4 rounded-t-xl">
        <Text className="text-secondary " size={"xs"}>
          Исходный код
        </Text>
        <HStack className="items-center cursor-pointer" onClick={handleCopy}>
          {!isCopied && <CopyIcon />}
          {isCopied && <Check className="w-4 h-4" />}
          <Text size={"xs"} className="text-white">
            Скопировать
          </Text>
        </HStack>
      </HStack>
      <Highlight theme={theme} code={code} language="tsx">
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="p-4 rounded-b-xl source-code">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="text-sm mr-4">{i + 1}</span>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, className: "text-xs" })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
