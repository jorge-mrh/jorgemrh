import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/supabase";

export interface UserProfile {
  id: string;
  role_id: number;
  roles?: {
    name?: string;
  } | null;
  [key: string]: unknown;
}

export function useFetchUserProfile(userId?: string) {
  return useQuery<UserProfile | null>({
    queryKey: ["profile", userId],
    queryFn: async () => {
      if (!userId) return null;

      const { data, error } = await supabase
        .from("profiles")
        .select("*, roles(name)")
        .eq("id", userId)
        .single();

      if (error) throw error;
      return data as UserProfile;
    },
    enabled: !!userId,
  });
}
