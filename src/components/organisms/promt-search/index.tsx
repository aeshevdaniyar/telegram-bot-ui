import useRecorder from "@/hooks/use-voice-recorder";
import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { AttachIcon, RecordingIcon } from "@components/atoms/Icon";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@components/atoms/Input";
import { Text } from "@components/atoms/Text";
import { AttachPopover } from "@components/molecules/attach-popover";
import { PromtSearchInput } from "@components/molecules/promt-search-input";
import { SettingDrawer } from "@components/molecules/setting-drawer";
import { SendHorizonal } from "lucide-react";
import {
  FC,
  MutableRefObject,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AudioRecordList } from "./records-list";
import { formatMinutes, formatSeconds } from "@/lib/format-time";

interface PromtSearchPanelProps {
  attachContent?: ReactNode;
  onSubmit?: (value: string) => void;
}

export const PromtSearchPanel: FC<PromtSearchPanelProps> = (props) => {
  const { onSubmit } = props;
  const [attachContent, setAttachContent] = useState(false);
  const { recorderState, startRecording, saveRecording } = useRecorder();

  const textbox = useRef(null) as MutableRefObject<HTMLTextAreaElement | null>;

  function adjustHeight() {
    if (textbox.current) {
      textbox.current.style.height = "inherit";
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(adjustHeight, []);

  const [promt, setPromt] = useState("");
  const onPromtEnter = () => {
    onSubmit?.(promt);
  };
  const onRecordStart = () => {
    if (!recorderState.initRecording) {
      startRecording();
    } else {
      saveRecording();
    }
  };
  useEffect(() => {
    if (recorderState.audio) {
      setAttachContent(true);
    }
  }, [recorderState.audio]);

  return (
    <Box className="w-full bg-white rounded-xl">
      {attachContent && (
        <Box className="p-4 border-secondary-foreground border-2 border-b-0 rounded-t-xl rounded-b-none ">
          <AudioRecordList audio={recorderState.audio} />
        </Box>
      )}

      <InputGroup className="w-full">
        <InputLeftElement className="bottom-2">
          <AttachPopover side="left">
            {!recorderState.initRecording && (
              <Box className="cursor-pointer animate-fade-right duration-75">
                <AttachIcon />
              </Box>
            )}

            {recorderState.initRecording && (
              <Text size={"xs"} className="absolute bottom-3">
                {formatMinutes(recorderState.recordingMinutes)}:
                {formatSeconds(recorderState.recordingSeconds)}
              </Text>
            )}
          </AttachPopover>
        </InputLeftElement>

        <PromtSearchInput
          value={promt}
          onChange={(e) => {
            setPromt(e.target.value);
          }}
          className={cn(
            attachContent && "rounded-b-xl rounded-t-none",
            recorderState.initRecording && "text-white placeholder:text-white"
          )}
        />

        <InputRightElement className="bottom-3">
          {promt.length == 0 && (
            <HStack className="items-center w-8 h-8 justify-center animate-fade-left duration-300 mr-4">
              <Box className="cursor-pointer" onClick={onRecordStart}>
                <RecordingIcon
                  className={cn(
                    "text-secondary",
                    recorderState.initRecording && "text-primary"
                  )}
                />
              </Box>

              {!recorderState.initRecording && (
                <Box className="animate-fade-left flex items-center">
                  <SettingDrawer />
                </Box>
              )}
            </HStack>
          )}
          {promt.length != 0 && (
            <Button
              variant={"ghost"}
              className="w-8 h-8 p-0 rounded-full animate-jump-in duration-300"
              onClick={onPromtEnter}
            >
              <SendHorizonal className="w-5 h-5" />
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
