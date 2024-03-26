import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../..";
export const CHATS_SESSIONS_QUERY_KEY = "chatsessions" as const;
export const CHATS_SESSION_QUERY_KEY = "chatsession" as const;
export const useChatSessions = (profile: number) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [CHATS_SESSIONS_QUERY_KEY],
    queryFn: () => client.chatsession.list(profile),
  });
  return { chatSessions: data, ...rest };
};

export const useChatSession = (profile: number, id: string) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [CHATS_SESSION_QUERY_KEY],
    queryFn: () => client.chatsession.retrive({ "X-UserId": profile }, id),
  });
  return { chatSession: data, ...rest };
};
