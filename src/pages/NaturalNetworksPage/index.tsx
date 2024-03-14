import AudioIcom from "@assets/audio.svg";
import CodeIcon from "@assets/code.svg";
import EduIcon from "@assets/edu.svg";
import PhotoIcon from "@assets/photo.svg";
import VideoIcon from "@assets/video.svg";
import { Heading } from "@components/atoms/Heading";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { AITypeItem } from "@components/molecules/ai-type-item";
import { Container } from "@components/molecules/container";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";
const NeturalNetworksPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Нейросети" />}>
      <Container>
        <Stack className="justify-center items-center">
          <Heading level={"h4"}>Раскройте возможности ИИ</Heading>
          <Text className="text-secondary font-normal">
            Испытайте силу искусственного интеллекта вместе с нами.
          </Text>
          <Stack className="w-full mt-8 gap-5">
            <AITypeItem
              image={PhotoIcon}
              pageLink="/all-ai"
              title="Генерация картинок"
            />
            <AITypeItem image={VideoIcon} pageLink="" title="Генерация видео" />
            <AITypeItem
              image={EduIcon}
              pageLink="/all-ai"
              title="Генерация Документов"
            />
            <AITypeItem
              image={AudioIcom}
              pageLink="/all-ai"
              title="Генерация звука"
            />
            <AITypeItem image={CodeIcon} pageLink="/all-ai" title="Чат Бот" />
          </Stack>
        </Stack>
      </Container>
    </PageHeader>
  );
};

export default NeturalNetworksPage;
