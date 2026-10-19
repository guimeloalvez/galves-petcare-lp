import { createContext, useContext } from "react";

import type { Session } from "../types/auth.types";

interface AuthContextValue {
  session: Session | null;
  signIn: (session: Session) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Erro ao logar");
  }

  return context;
}
