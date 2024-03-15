import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import { HStack } from "@components/atoms/HStack";
import { AddIcon, RecordingIcon } from "@components/atoms/Icon";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@components/atoms/Input";
import { AttachPopover } from "@components/molecules/attach-popover";
import { PromtSearchInput } from "@components/molecules/promt-search-input";
import { SettingDrawer } from "@components/molecules/setting-drawer";
import { FC, ReactNode, useState } from "react";

interface PromtSearchPanelProps {
  attachContent?: ReactNode;
}

export const PromtSearchPanel: FC<PromtSearchPanelProps> = (props) => {
  const { attachContent } = props;
  const [promt, setPromt] = useState("");
  return (
    <Box className="w-full bg-white rounded-xl">
      {attachContent && (
        <Box className="p-4 border-secondary-foreground border-2 border-b-0 rounded-t-xl rounded-b-none ">
          {attachContent}
        </Box>
      )}
      <InputGroup className="w-full">
        <InputLeftElement>
          <AttachPopover side="left">
            <Box className="cursor-pointer">
              <AddIcon />
            </Box>
          </AttachPopover>
        </InputLeftElement>
        <PromtSearchInput
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
          className={cn(
            attachContent && "border-t-0 rounded-b-xl rounded-t-none"
          )}
        />
        <InputRightElement>
          <HStack className="items-center justify-center">
            <AttachPopover side="right">
              <Box className="cursor-pointer">
                <RecordingIcon />
              </Box>
            </AttachPopover>

            <SettingDrawer />
          </HStack>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
