import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./auth.context";
import {
  clearSession,
  readSession,
  saveSession,
} from "../storage/auth.storage";
import type { Session } from "../types/auth.types";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(readSession);

  function signIn(newSession: Session) {
    saveSession(newSession);
    setSession(newSession);
  }

  function signOut() {
    clearSession();
    setSession(null);
  }

  return (
    <AuthContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
