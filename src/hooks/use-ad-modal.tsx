import StarIcon from "@assets/star.svg";
import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@components/templates/global-dialog";
import { X } from "lucide-react";
import { FC } from "react";
import { createRoot } from "react-dom/client";
export interface AdModalProps {
  days: number;
  amount: number;
  tokens: number;
  name: string;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const AdModal: FC<AdModalProps> = (props) => {
  const { amount, days, tokens, name, onClose, onOpen, open } = props;
  const onChange = (state: boolean) => {
    if (state) {
      onOpen();
    }

    if (!state) {
      onClose();
    }
  };
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="text-center">
        <Text className="text-2xl text-white" onClick={onClose}>
          {name}
        </Text>
        <Box className="w-full flex justify-center">
          <Box className="w-full relative">
            <div className="absolute top-0 left-2/4 -translate-x-2/4 -z-10 filter blur-2xl bg-white w-32 h-32 md:w-52 md:h-52 rounded-full" />
            <Box className="flex w-full relative justify-center animate-jump-in h-36 md:h-56">
              <img src={StarIcon} className="animate-spin duration-20 " />

              <Box className="absolute top-6 md:top-14">
                <Stack className="gap-0">
                  <Text className="text-primary font-bold  text-2xl md:text-5xl">
                    {days}
                  </Text>
                  <Text className="text-primary font-medium text-lg md:text-2xl leading-none">
                    дня
                  </Text>
                </Stack>
                <Text className="text-primary text-xs font-normal mt-3">
                  за {amount} ₽
                </Text>
              </Box>
            </Box>

            <Box className="mt-10">
              <Stack className="w-full">
                <Button className="border-dashed justify-center border-white bg-white/20 w-full">
                  💎 {tokens} токенов на счёт
                </Button>
                <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                  Попробовать
                </Button>
                <Text className="text-sm md:text-lg font-medium text-white text-center">
                  Более 50 разных нейросетей доступны вам в каталоге!
                </Text>
              </Stack>
            </Box>
          </Box>
        </Box>
        <DialogClose className="absolute pointer-events-auto bottom-0 translate-y-[150%] left-[50%] -translate-x-[50%] rounded-sm   transition-opacity  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <HStack className=" text-white items-center justify-center w-max text-nowrap gap-1 ">
            <X />
            <Text className="text-sm md:text-2xl text-white">
              Предложить позже
            </Text>
          </HStack>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export interface UseAdModalProps {
  days: number;
  amount: number;
  tokens: number;
  name: string;
}
export const useAdModal = ({ amount, days, name, tokens }: UseAdModalProps) => {
  const mountRoot = createRoot(document.createElement("div"));

  let open = true;
  const onOpen = () => {
    open = true;
    render();
  };

  const onClose = () => {
    open = false;
    render();
  };

  const render = () => {
    mountRoot.render(
      <AdModal
        amount={amount}
        days={days}
        name={name}
        tokens={tokens}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
      />
    );
  };

  return { open, onOpen, onClose };
};
