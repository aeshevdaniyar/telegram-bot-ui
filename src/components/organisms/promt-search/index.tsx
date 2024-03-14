import { Box } from "@components/atoms/Box";
import { HStack } from "@components/atoms/HStack";
import { AddIcon, RecordingIcon, Setting2Icon } from "@components/atoms/Icon";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@components/atoms/Input";

export const PromtSearchPanel = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Box className="cursor-pointer">
          <AddIcon />
        </Box>
      </InputLeftElement>
      <input
        placeholder="Введите свой запрос"
        className="flex bg-muted w-full rounded-xl outline-none py-4 pl-14 pr-20 file:border-0 file:bg-transparent text-base font-medium placeholder:text-secondary/50  disabled:cursor-not-allowed disabled:opacity-50"
      />
      <InputRightElement>
        <HStack className="items-center justify-center">
          <Box className="cursor-pointer">
            <RecordingIcon />
          </Box>
          <Box className="cursor-pointer">
            <Setting2Icon />
          </Box>
        </HStack>
      </InputRightElement>
    </InputGroup>
  );
};
