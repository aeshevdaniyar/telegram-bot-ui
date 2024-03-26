import { useMutation } from "@tanstack/react-query";
import { useApiClient } from "../..";

export const useChatFolderCreate = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: { name: string }) =>
      client.chatfolder.create({ "X-UserId": profile }, payload),
  });
};

export const useChatFolderDelete = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: string) =>
      client.chatfolder.delete({ "X-UserId": profile }, payload),
  });
};

export const useChatFolderEdit = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: string) =>
      client.chatfolder.delete({ "X-UserId": profile }, payload),
  });
};
