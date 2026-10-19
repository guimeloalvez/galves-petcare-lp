import { api } from "../../../lib/api";
import type { LoginCredentials, Session } from "../types/auth.types";

export async function login(credentials: LoginCredentials): Promise<Session> {
  const response = await api.post<Session>("/auth/login", credentials);

  return response.data;
}
