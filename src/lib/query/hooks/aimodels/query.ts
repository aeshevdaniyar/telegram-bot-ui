import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../..";
import { AiModel } from "@/lib/api/types";

const AI_MODELS_QUERY_KEY = `aimodels` as const;
export const useAiModels = (onSelect?: (data: AiModel[]) => void) => {
  const { client } = useApiClient();
  const { data, ...rest } = useQuery({
    queryKey: [AI_MODELS_QUERY_KEY],
    queryFn: async () => await client.aimodels.list(),
    select(data) {
      onSelect && onSelect(data);

      return data;
    },
  });

  return { aimodels: data, ...rest };
};
