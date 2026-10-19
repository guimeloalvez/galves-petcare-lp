import { useState } from "react";
import type { FormEvent } from "react";
import { MdOutlinePets } from "react-icons/md";

import { useLogin } from "../hooks/use-login";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { mutate: login, isPending, error } = useLogin();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    login({ email, senha });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2">
        <MdOutlinePets size={24} color="text-green-light" />
        <h2 className="text-[20px] font-black text-green">pet</h2>
        <h2 className="text-[20px] font-black text-orange-primary">care</h2>
      </div>

      <div className="text-center mt-10">
        <p className="text-green text-3xl font-bold mb-4">
          Entrar na sua conta
        </p>
        <p className="text-gray-dark mb-10">Acompanhe a rotina do seu pet</p>
      </div>

      <form onSubmit={handleSubmit} className="w-100 flex flex-col gap-4">
        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">E-mail</p>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            className="bg-primary border-b border-gray-light pb-3 w-full text-sm font-medium"
          />
        </div>

        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">Senha</p>
          <input
            type="password"
            required
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Sua senha"
            className="bg-primary border-b border-gray-light pb-3 w-full text-sm font-medium"
          />
        </div>

        {error && (
          <p className="text-orange-primary text-sm font-medium">
            E-mail ou senha invalidos.
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="bg-green-dark mt-10 text-white cursor-pointer shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)] font-semibold rounded-full py-3 w-full disabled:opacity-60"
        >
          {isPending ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <div className="flex items-center gap-1 mt-6 text-sm">
        <p className="text-gray-dark">Ainda não tem conta?</p>
        <a href="" className="text-green underline font-medium">
          Cadastre-seu pet
        </a>
      </div>
    </div>
  );
}
