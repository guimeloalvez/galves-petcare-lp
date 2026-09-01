import { FaPlus } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <div className="flex items-center gap-2 bg-[#E2F0EA] p-2.5 rounded-full">
        <MdOutlinePets size={20} color="#153229" />
        <p className="text-[#153229] text-sm font-bold">Feito para tutores</p>
      </div>

      <h1 className="mt-6 text-5xl max-w-160 font-black text-center text-[#153229]">
        Toda a rotina do seu pet,{" "}
        <span className="text-[#FF6B4A]">numa coleira só</span>
      </h1>

      <p className="mt-6 max-w-120 text-center gap-4">
        Agende consultas, acompanhe vacinas e fale com veterinários sem sair do
        app. O PetCare organiza o que seu pet precisa, antes de você precisar
        lembrar.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Button
          text={"Ver funcionalidades"}
          backgroundColor={"bg-[#FF6B4A]"}
          textColor={"text-white"}
          fontSize={"text-sm"}
          link=""
          isBorder={false}
        />
        {/* <a
          href=""
          className="hidden md:block bg-[#FF6B4A] text-white font-medium font-display text-sm px-6 py-2.5 rounded-full shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)]"
        >
          Ver funcionalidades
        </a> */}

        <Button
          text={"Falar com um veterinário"}
          backgroundColor={"bg-transparent"}
          textColor={"text-[#153229]"}
          fontSize={"text-sm"}
          link=""
          isBorder={true}
          border={"border border-[#ccc]"}
        />
        {/* <a
          href=""
          className="hidden md:block font-medium font-display px-6 py-2.5 rounded-full"
        >
          Falar com um veterinário
        </a> */}
      </div>

      <div className="flex items-center gap-5 mt-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center">
            <p className="font-bold">12 mil </p> <FaPlus size={14} />
          </div>
          <p className="text-[12px]">pets cadastrados</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center">
            <p className="font-bold">4.9 </p> <IoMdStar size={14} />
          </div>
          <p className="text-[12px]">avaliação média</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <p className="font-bold">24/7 </p>
          <p className="text-[12px]">suporte via chat</p>
        </div>
      </div>
    </section>
  );
}
