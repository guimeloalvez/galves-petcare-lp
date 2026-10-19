import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "../services/auth.service";
import { useAuth } from "../contexts/auth.context";

export function useLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (session) => {
      signIn(session);
      navigate("/");
    },
  });
}
