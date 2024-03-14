import { Box } from "@components/atoms/Box";
import {
  ActiveHashtagIcon,
  ActiveMessageIcon,
  ActivePeopleIcon,
  ActiveUserIcon,
  HashtagIcon,
  MessageIcon,
  PeopleIcon,
  UserIcon,
} from "@components/atoms/Icon";
import { BottomNavigationItem } from "@components/molecules/bottom-navigation-item";
import { Container } from "@components/molecules/container";

export const BottomNavigation = () => {
  return (
    <Box className="h-bottom-navigation fixed bottom-0 left-0 right-0  bg-white shadow-2xl">
      <Container className="h-full">
        <div className="grid grid-cols-4 h-full items-center justify-center gap-7">
          <BottomNavigationItem
            pageLink="/profile"
            icon={<UserIcon className="w-7 h-7" />}
            text="Аккаунт"
            activeIcon={<ActiveUserIcon className="w-7 h-7" />}
          />
          <BottomNavigationItem
            pageLink="/chats"
            icon={<MessageIcon className="w-7 h-7" />}
            text="Диалоги"
            activeIcon={<ActiveMessageIcon className="w-7 h-7" />}
          />
          <BottomNavigationItem
            pageLink="/natural-networks"
            icon={<HashtagIcon className="w-7 h-7" />}
            text="Нейросети"
            activeIcon={<ActiveHashtagIcon className="w-7 h-7" />}
          />
          <BottomNavigationItem
            pageLink="/refs"
            icon={<PeopleIcon className="w-7 h-7" />}
            text="Рефералка"
            activeIcon={<ActivePeopleIcon className="w-7 h-7" />}
          />
        </div>
      </Container>
    </Box>
  );
};
