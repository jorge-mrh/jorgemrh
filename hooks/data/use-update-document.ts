import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export function useUpdateDocument(
  currentDocId?: string,
  editorState?: unknown
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => {
      if (!currentDocId) throw new Error("Missing document id");

      const { error } = await supabase
        .from("documents")
        .update({
          name,
          content: editorState,
          updated_at: new Date().toISOString(),
        })
        .eq("id", currentDocId);

      if (error) throw error;
      return { id: currentDocId, name, content: editorState };
    },
    onSuccess: (_, __, ctx) => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      queryClient.invalidateQueries({ queryKey: ["document", currentDocId] });
    },
  });
}
