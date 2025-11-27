import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export type Contact = {
  id: string;
  email: string;
  message: string;
  profile_id: string | null;
  created_at: string | null;
  seen: boolean;
};

export function useFetchContacts(enabled: boolean) {
  return useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("id, email, message, profile_id, created_at, seen")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data ?? [];
    },
    enabled,
  });
}
