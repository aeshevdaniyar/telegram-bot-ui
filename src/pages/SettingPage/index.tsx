import { Container } from "@components/molecules/container";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const SettingPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Настройки" />}>
      <Container></Container>
    </PageHeader>
  );
};

export default SettingPage;
