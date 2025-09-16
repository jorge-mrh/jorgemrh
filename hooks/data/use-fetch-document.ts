import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export function useFetchDocument(id?: string) {
  return useQuery({
    queryKey: ["document", id],
    queryFn: async () => {
      if (!id) return null;

      const { data, error } = await supabase
        .from("documents")
        .select("name, content")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id, // only run when id is defined
  });
}
