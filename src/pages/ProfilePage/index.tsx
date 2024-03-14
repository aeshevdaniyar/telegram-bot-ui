import { Container } from "@components/molecules/container";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const ProfilePage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Мой аккаунт" />}>
      <Container></Container>
    </PageHeader>
  );
};

export default ProfilePage;
