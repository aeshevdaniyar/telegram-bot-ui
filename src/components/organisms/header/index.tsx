import { Box } from "@components/atoms/Box";
import { HStack } from "@components/atoms/HStack";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";
import { Logo } from "@components/molecules/logo";

export const Header = () => {
  return (
    <Box className="border-b border-secondary-foreground shadow-sm">
      <Container className="h-header">
        <HStack className="items-center justify-center relative h-full">
          <Logo className="absolute left-0 animate-bounce" />
          <Text size={"lg"}>Нейросети</Text>
        </HStack>
      </Container>
    </Box>
  );
};
