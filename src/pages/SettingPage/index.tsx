import { Container } from "@components/molecules/container";
import { SettingForm } from "@components/molecules/setting-form";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const SettingPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Настройки" />}>
      <Container>
        <SettingForm />
      </Container>
    </PageHeader>
  );
};

export default SettingPage;
