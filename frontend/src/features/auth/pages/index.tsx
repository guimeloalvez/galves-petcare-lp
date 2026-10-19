import { PiPawPrintFill } from "react-icons/pi";

export default function AuthPage() {
  return (
    <section className="min-h-screen bg-[#F6F4EE] flex flex-col items-center justify-center font-sans text-[#153229]">
      <div className="w-full max-w-md px-6 flex flex-col">
        <div className="flex gap-2 items-center justify-center mb-16">
          <PiPawPrintFill size={20} className="text-[#515F58]" />
          <h2 className="font-bold text-[22px] flex gap-[6px]">
            <span className="text-[#153229]">pet</span>
            <span className="text-[#FF6B4A]">care</span>
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center mb-10 text-center">
          <h1 className="font-bold text-[32px] mb-2 text-[#153229]">
            Entrar na sua conta
          </h1>
          <p className="font-medium text-[15px] text-[#86958D]">
            Acompanhe a rotina do seu pet.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold text-sm text-[#86958D]">E-mail</label>
            <input
              type="email"
              placeholder="voce@email.com"
              className="bg-transparent border-b border-[#E0E2DF] py-2 text-base outline-none text-[#153229] placeholder-[#AEB7B2]"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold text-sm text-[#86958D]">Senha</label>
            <input
              type="password"
              placeholder="Sua senha"
              className="bg-transparent border-b border-[#E0E2DF] py-2 text-base outline-none text-[#153229] placeholder-[#AEB7B2]"
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="font-bold text-sm text-[#86958D] hover:text-[#153229] transition-colors"
            >
              Esqueci minha senha
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 w-full">
          <button className="w-full bg-[#112920] text-white font-bold text-lg py-[14px] rounded-full hover:bg-[#1a3d30] transition-colors">
            Entrar
          </button>

          <div className="flex gap-1 mt-6 text-[15px]">
            <p className="text-[#86958D] font-medium">Ainda não tem conta?</p>
            <a
              href="#"
              className="font-bold text-[#153229] underline decoration-1 underline-offset-[3px] hover:text-[#FF6B4A] transition-colors"
            >
              Cadastre seu pet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
