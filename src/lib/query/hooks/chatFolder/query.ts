import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../..";
export const CHAT_FOLDERS_QUERY_KEY = `chatfolders` as const;
export const CHAT_FOLDER_QUERY_KEY = `chatfolder` as const;
export const useChatFolderList = (profile: number) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [CHAT_FOLDERS_QUERY_KEY],
    queryFn: () => client.chatfolder.list({ "X-UserId": profile }),
  });

  return {
    chatFolders: data,
    ...rest,
  };
};

export const useChatFolder = (id: string, profile: number) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [CHAT_FOLDER_QUERY_KEY, id],
    queryFn: () => client.chatfolder.retrive({ "X-UserId": profile }, id),
  });

  return {
    chatFolder: data,
    ...rest,
  };
};
