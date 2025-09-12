import { create } from "zustand";
import supabase from "@/lib/supabase";

interface AuthState {
  user: any | null;
  profile: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  loading: true,

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error && data.user) {
      set({ user: data.user });
      await get().fetchProfile();
    }
    return { error };
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, profile: null });
  },

  fetchProfile: async () => {
    const { data } = await supabase
      .from("profiles")
      .select("*, roles(name)")
      .single();
    set({ profile: data });
  },
  initialize: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      set({ user: session.user });
      await get().fetchProfile();
    }
    set({ loading: false });
  },
}));
