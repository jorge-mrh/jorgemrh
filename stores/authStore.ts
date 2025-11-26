import { create } from "zustand";
import supabase from "@/lib/supabase";

interface AuthState {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  recoverPassword: (email: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
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
    }
    return { error };
  },
  recoverPassword: async (email) => {
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/recover-password`
        : undefined;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    return { error };
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  initialize: async () => {
    if (
      typeof window !== "undefined" &&
      window.location.pathname === "/recover-password"
    ) {
      set({ loading: false, user: null });
      return;
    }
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      set({ user: session.user });
    }
    set({ loading: false });
  },
}));
