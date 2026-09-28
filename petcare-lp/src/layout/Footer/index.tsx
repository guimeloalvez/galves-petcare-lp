import { FaInstagram, FaRegCommentDots } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#153229] px-5 md:px-20 pt-14 pb-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-white text-2xl">
                <MdOutlinePets size={20} color="#ffffff" />
              </span>
              <p className="font-black text-xl ml-2">
                <span className="text-white">pet</span>{" "}
                <span className="text-[#FF6B4A]">care</span>
              </p>
            </div>
          </div>

          <p className="text-[#999999] text-sm leading-5 max-w-65 mt-5">
            Uma plataforma pra cuidar de quem não pode pedir por cuidado. Feito
            por tutores, pra tutores.
          </p>
        </div>

        {/* Produto */}
        <div>
          <p className="font-semibold text-sm mb-5">PRODUTO</p>

          <div className="flex flex-col gap-4">
            <a
              href="#inicio"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Início
            </a>

            <a
              href="#funcionalidades"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Funcionalidades
            </a>

            <a
              href="#planos"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Planos
            </a>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <p className="font-semibold text-sm mb-5">EMPRESA</p>

          <div className="flex flex-col gap-4">
            <a
              href="#sobre"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Sobre nós
            </a>

            <a
              href="#clinicas"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Clínicas parceiras
            </a>

            <a
              href="#trabalhe-conosco"
              className="text-[#999999] text-sm hover:text-white transition-colors"
            >
              Trabalhe conosco
            </a>
          </div>
        </div>

        {/* Contato */}
        <div>
          <p className="font-semibold text-sm mb-5">CONTATO</p>

          <div className="flex flex-col gap-4">
            <p className="text-[#999999] text-sm">contato@petcare.app</p>

            <p className="text-[#999999] text-sm">(48) 99999-0000</p>

            <p className="text-[#999999] text-sm">Florianópolis, SC</p>
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="border-t border-white/10 mt-12 pt-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-[#777777] text-xs">
          © 2026 PetCare. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#999999] hover:text-white hover:border-white/30 transition-all"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href="#"
            aria-label="Contato"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#999999] hover:text-white hover:border-white/30 transition-all"
          >
            <FaRegCommentDots size={16} />
          </a>
        </div>
      </div>

      {/* Botão de chat */}
      <button
        aria-label="Abrir chat"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-8 w-14 h-14 rounded-full bg-[#FF6045] flex items-center justify-center shadow-[0_0_0_8px_rgba(255,96,69,0.12)] hover:scale-105 transition-transform cursor-pointer"
      >
        <FaRegCommentDots size={23} color="#fff" />
      </button>
    </footer>
  );
}
