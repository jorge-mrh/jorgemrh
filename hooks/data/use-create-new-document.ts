import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export function useCreateDocument(userId?: string, editorState?: unknown) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => {
      if (!userId) throw new Error("Missing user id");

      const { data, error } = await supabase
        .from("documents")
        .insert([{ user_id: userId, name, content: editorState }])
        .select("id")
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", userId] });
    },
  });
}
