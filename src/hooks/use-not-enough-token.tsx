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
export interface NotEnoughTokenModalProps {
  price: number;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const NotEnoughTokenModal: FC<NotEnoughTokenModalProps> = (props) => {
  const { price, onClose, onOpen, open } = props;
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
        <Box className="w-full flex justify-center">
          <Box className="w-full relative">
            <div className="absolute top-4 left-2/4 -translate-x-2/4 -z-10 filter blur-2xl bg-white w-32 h-32 md:w-52 md:h-52 rounded-full" />
            <Box className="flex w-full relative justify-center animate-jump-in h-36 md:h-56">
              <img src={StarIcon} className="animate-spin duration-20 " />
              <Box className="absolute top-8 md:top-16">
                <Text className="text-7xl md:text-8xl">💎</Text>
              </Box>
            </Box>

            <Box className="mt-5">
              <Text className="text-2xl text-white">
                У вас недостаточно токенов
              </Text>
              <Text className="text-lg font-medium text-white mt-2">
                Чтобы продолжить
              </Text>
              <Stack className="w-full mt-6 md:mt-10">
                <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                  Купить токены
                </Button>
                <HStack className="items-center w-full">
                  <span className="flex-grow bg-white/50 rounded h-[1px]"></span>
                  <Text className="font-normal text-white/50">Или</Text>
                  <span className="flex-grow bg-white/50 rounded h-[1px]"></span>
                </HStack>
                <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                  Подписку за {price}₽
                </Button>
                <Text className="text-sm md:text-lg font-medium text-white text-center">
                  *С подпиской токены стоят дешевле
                </Text>
              </Stack>
            </Box>
          </Box>
        </Box>
        <DialogClose className="absolute pointer-events-auto bottom-0 translate-y-[150%] left-[50%] -translate-x-[50%] rounded-sm   transition-opacity  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <HStack className=" text-white items-center justify-center w-max text-nowrap gap-1 ">
            <X />
            <Text className="text-sm md:text-2xl text-white">Нет спасибо</Text>
          </HStack>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export interface UseNotEnoughTokenModalProps {
  price: number;
}
export const useNotEnoughTokenModal = ({
  price,
}: UseNotEnoughTokenModalProps) => {
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
      <NotEnoughTokenModal
        price={price}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
      />
    );
  };

  return { open, onOpen, onClose };
};
