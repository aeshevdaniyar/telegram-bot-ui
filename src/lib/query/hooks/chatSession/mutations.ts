import { useMutation } from "@tanstack/react-query";
import { useApiClient } from "../..";
import ChatSession from "@/lib/api/resource/chatSession";

export const useChatFolderCreate = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: ChatSession) =>
      client.chatsession.create(profile, payload),
  });
};

export const useChatFolderDelete = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: string) =>
      client.chatsession.delete({ "X-UserId": profile }, payload),
  });
};

export const useChatFolderEdit = (profile: number) => {
  const { client } = useApiClient();
  return useMutation({
    mutationFn: (payload: string) =>
      client.chatsession.edit({ "X-UserId": profile }, payload),
  });
};
