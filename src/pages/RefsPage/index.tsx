import { useClipboard } from "@/hooks/use-clipboard";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Card } from "@components/atoms/Card";
import { Container } from "@components/molecules/container";
import { CopyBlock } from "@components/molecules/copy-block";

const RefsPage = () => {
  const { handleCopy, isCopied } = useClipboard(
    "https://t.me/chatgpt_tgm_bot?start=12",
    {
      timeout: 1000,
    }
  );
  return (
    <Container>
      <Stack className="gap-5">
        <Card>
          <HStack className="items-center justify-between">
            <HStack className="items-center">
              <Text>💎</Text>
              <Text className="text-2xl">0 токенов</Text>
            </HStack>
            <HStack className="bg-muted w-7 h-7 rounded-full items-center justify-center">
              ?
            </HStack>
          </HStack>
        </Card>
        <HStack className="gap-4 md:flex-row flex-col">
          <CopyBlock text="https://t.me/chatgpt_tgm_bot?start=12" />
          <Button
            className="md:max-w-72 w-full justify-center rounded-xl"
            onClick={handleCopy}
          >
            {!isCopied && "Копировать ссыку"}
            {isCopied && "Ссылка скопирована"}
          </Button>
        </HStack>
        <Card>
          <Stack className="gap-4.5">
            <HStack className="gap-4">
              <Text>💎</Text>
              <HStack className="justify-between w-full items-center border-b pb-4">
                <Text>1000 - токенов за каждого разработчика работы с API</Text>
                <HStack className="bg-muted min-w-7 h-7 rounded-full items-center justify-center">
                  ?
                </HStack>
              </HStack>
            </HStack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default RefsPage;
