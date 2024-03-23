import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../..";
const PROFILE_QUERY_KEY = `profile` as const;
export const useProfile = (id: number) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [PROFILE_QUERY_KEY],
    queryFn: () =>
      client.profile.retrive({
        "X-UserId": id,
      }),
  });

  return { profile: data, ...rest };
};
