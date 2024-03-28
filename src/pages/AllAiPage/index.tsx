import { useAiModels } from "@/lib/query/hooks/aimodels/query";
import { Stack } from "@components/atoms/Stack";
import { Container } from "@components/molecules/container";
import { NaturalnetworksListItem } from "@components/molecules/naturalnetworks-list-item";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";
import { PageSkeleton } from "./page-skeleton";
import { useAiModelsFilter } from "./use-aimodels-filter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const AllAiPage = () => {
  const { search } = useLocation();
  const { setAiModels, getFilteredAiModels } = useAiModelsFilter(search);
  const { isLoading, aimodels } = useAiModels();
  useEffect(() => {
    if (!isLoading && aimodels?.length) {
      setAiModels(aimodels);
    }
  }, [aimodels, isLoading, setAiModels]);
  if (isLoading) {
    return (
      <PageHeader pageContent={<BaseHeaderContent title="Все нейросети" />}>
        <Container>
          <PageSkeleton />
        </Container>
      </PageHeader>
    );
  }
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Все нейросети" />}>
      <Container>
        <Stack className="gap-4.5">
          {getFilteredAiModels().map(({ name, icon, description, pk }) => {
            return (
              <NaturalnetworksListItem
                description={description || ""}
                imageLogo={icon}
                name={name}
                isNew
                amount={100}
                key={pk}
              />
            );
          })}

          {/* <Pagination
            currentPage={1}
            innerLimit={1}
            outerLimit={1}
            onChange={() => {}}
            pagesQuantity={12}
          /> */}
        </Stack>
      </Container>
    </PageHeader>
  );
};

export default AllAiPage;
