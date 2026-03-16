import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  mfaToken: string | null;
  email: string | null;
  setMFAData: (mfaToken: string, email: string) => void;
  clearMFAData: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      mfaToken: null,
      email: null,
      setMFAData: (mfaToken, email) => set({ mfaToken, email }),
      clearMFAData: () => set({ mfaToken: null, email: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
