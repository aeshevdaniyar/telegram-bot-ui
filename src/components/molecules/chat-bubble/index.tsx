import { Avatar, AvatarFallback, AvatarImage } from "@components/atoms/Avatar";
import { Button } from "@components/atoms/Button";
import { Card } from "@components/atoms/Card";
import { HStack } from "@components/atoms/HStack";
import { Text } from "@components/atoms/Text";
import { FC, ReactNode } from "react";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/cn";
import { Stack } from "@components/atoms/Stack";
export interface ChatBubbleProps {
  avatarImg: string;
  text: string;
  date: Date;
  type: "request" | "response";
  attachContent?: ReactNode;
}
export const ChatBubble: FC<ChatBubbleProps> = ({
  avatarImg,
  text,
  date,
  type,
  attachContent,
}) => {
  return (
    <Card
      className={cn(
        "relative",
        type == "response" && "border-none bg-muted pb-12"
      )}
    >
      <Stack className="gap-4">
        {attachContent}
        <Text className="font-normal">{text}</Text>
      </Stack>

      <Avatar
        className={cn(
          "absolute bottom-0  translate-y-2/4 w-16 h-16 rounded-2xl",
          type == "request" && "right-4",
          type == "response" && "left-4"
        )}
      >
        <AvatarImage src={avatarImg} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {type == "request" && (
        <HStack className="absolute gap-3 bottom-0 translate-y-full pt-2">
          <Text size={"sm"} className="text-secondary/50 font-sans">
            {formatDistance(date, new Date(), {
              locale: ru,
            })}
          </Text>
          <Button variant={"secondary"} className="py-0.5 px-2 text-sm">
            Редактировать
          </Button>
        </HStack>
      )}
    </Card>
  );
};
