import supabase from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export interface FetchUserDocumentsOptions {
  user_id: string;
}
export function useFetchUserDocuments({ user_id }: FetchUserDocumentsOptions) {
  return useQuery({
    queryKey: ["documents", user_id],
    queryFn: async () => {
      if (!user_id) return [];

      const { data, error } = await supabase
        .from("documents")
        .select("id, name")
        .eq("user_id", user_id);

      if (error) throw error;
      return data;
    },
    enabled: !!user_id, // only run if user_id is set
  });
}
