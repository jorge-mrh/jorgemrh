import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export function useDeleteDocument(userId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (documentId: string) => {
      if (!userId) {
        throw new Error("Missing user ID. Cannot delete document.");
      }

      const { error } = await supabase
        .from("documents")
        .delete()
        .eq("id", documentId)
        .eq("user_id", userId);
      if (error) {
        throw error;
      }
      // No data is returned on a successful deletion
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", userId] });
    },
  });
}
