import { Box } from "@components/atoms/Box";
import { Heading } from "@components/atoms/Heading";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { AITypeItem } from "@components/molecules/ai-type-item";
import { Container } from "@components/molecules/container";
import PhotoIcon from "@assets/photo.svg";
import VideoIcon from "@assets/video.svg";
import EduIcon from "@assets/edu.svg";
import AudioIcom from "@assets/audio.svg";
import CodeIcon from "@assets/code.svg";
import { PromtSearchPanel } from "@components/organisms/promt-search";
const NeturalNetworksPage = () => {
  return (
    <Box>
      <Container>
        <Stack className="justify-center items-center">
          <Heading level={"h4"}>Раскройте возможности ИИ</Heading>
          <Text>Испытайте силу искусственного интеллекта вместе с нами.</Text>
          <Stack className="w-full mt-8 gap-5">
            <AITypeItem
              image={PhotoIcon}
              pageLink=""
              title="Генерация картинок"
            />
            <AITypeItem image={VideoIcon} pageLink="" title="Генерация видео" />
            <AITypeItem
              image={EduIcon}
              pageLink=""
              title="Генерация Документов"
            />
            <AITypeItem image={AudioIcom} pageLink="" title="Генерация звука" />
            <AITypeItem image={CodeIcon} pageLink="" title="Чат Бот" />
          </Stack>
        </Stack>
        <Box className="mt-9">
          <PromtSearchPanel />
        </Box>
      </Container>
    </Box>
  );
};

export default NeturalNetworksPage;
