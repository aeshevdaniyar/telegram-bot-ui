import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../..";

const AI_MODELS_QUERY_KEY = `aimodels` as const;
export const useAiModels = () => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [AI_MODELS_QUERY_KEY],
    queryFn: async () => await client.aimodels.list(),
  });

  return { aimodels: data, ...rest };
};
