import { AnimatedBackground } from "@components/atoms/AnimatedBackground";
import { Button } from "@components/atoms/Button";
import { Card } from "@components/atoms/Card";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { FC, PropsWithChildren } from "react";
import { useTelegram } from ".";
interface TelegramGuardProps {
  off?: boolean;
}
export const TelegramGuard: FC<PropsWithChildren<TelegramGuardProps>> = ({
  children,
  off = false,
}) => {
  const { webApp } = useTelegram();
  if (!webApp?.initData && !off) {
    return (
      <AnimatedBackground>
        <Card className="bg-white w-full max-w-md">
          <Stack className="gap-4">
            <Text>Приложение доступно только через телеграмм</Text>
            <a
              className="w-full"
              href="https://t.me/naturalnetworks_bot"
              target="_blank"
            >
              <Button className="w-full">Сслыка на Telegram приложение</Button>
            </a>
            <a
              className="w-full"
              href="https://t.me/naturalnetworks_bot"
              target="_blank"
            >
              <Button className="w-full">Сслыка на Web приложение</Button>
            </a>
          </Stack>
        </Card>
      </AnimatedBackground>
    );
  }
  return <>{children}</>;
};
