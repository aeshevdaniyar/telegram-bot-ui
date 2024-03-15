import ChatGptLogo from "@assets/ChatGPTLogo.svg";
import { Pagination } from "@components/atoms/Pagination";
import { Stack } from "@components/atoms/Stack";
import { Container } from "@components/molecules/container";
import { NaturalnetworksListItem } from "@components/molecules/naturalnetworks-list-item";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";
const AllAiPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Все нейросети" />}>
      <Container>
        <Stack className="gap-4.5">
          <NaturalnetworksListItem
            description="Популярная модель для работы с текстом. Есть выбор моделей GPT 3, GPT4 и GPT 4 turbo"
            imageLogo={ChatGptLogo}
            name="ChatGPT"
          />
          <NaturalnetworksListItem
            description="Популярная модель для работы с текстом. Есть выбор моделей GPT 3, GPT4 и GPT 4 turbo"
            imageLogo={ChatGptLogo}
            name="ChatGPT"
          />
          <NaturalnetworksListItem
            description="Популярная модель для работы с текстом. Есть выбор моделей GPT 3, GPT4 и GPT 4 turbo"
            imageLogo={ChatGptLogo}
            name="ChatGPT"
          />

          <NaturalnetworksListItem
            description="Популярная модель для работы с текстом. Есть выбор моделей GPT 3, GPT4 и GPT 4 turbo"
            imageLogo={ChatGptLogo}
            name="ChatGPT"
          />

          <Pagination
            currentPage={1}
            innerLimit={1}
            outerLimit={1}
            onChange={() => {}}
            pagesQuantity={12}
          />
        </Stack>
      </Container>
    </PageHeader>
  );
};

export default AllAiPage;
