import Card from "../../components/Cards";
import { CiCalendar } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlClock } from "react-icons/sl";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Features() {
  return (
    <section className="px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="gap-2 bg-[#DCEFE4] P-2.5 rounded-full">
          <p className="text-[#153229] text-sm font-bold">
            Funcionalidades
          </p>
        </div>
        <h2 className="mt-6 text-4xl max-w-150 text-center font-black text-[#153229]">
          Tudo que o seu pet precisa, num só <span>lugar</span>
        </h2>

        <p className="mt-6 max-w-150 text-center">
          Da vacina ao passeio, o PetCare acompanha cada etapa do cuidado - pra
          você nunca perder nada de vista.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-14 gap-6">
        <Card title="Agendamentos de consultas" description="Marque horários com clínicas parceiras em poucos toques e 
          receba lembretes automáticos" icon={<CiCalendar size={32} color="#153229" />} fundo="bg-[#DCEFE4]" />

        <Card title="Carteira de vacinação" description="Histórico completo de vacinas e vermífugos,
com alerta antes de cada dose vencer." icon={<TbVaccine size={32} color="#C85A32" />} fundo="bg-[#FDF0EA]" />

        <Card title="Histórico de saúde" description="Peso, exames e diagnósticos organizados
por pet, prontos pra mostrar ao veterinário." icon={<FaRegHeart size={32} color="#C09A46" />} fundo="bg-[#FBF5E6]" />

        <Card title="Chat com veterinários" description="Tire dúvidas rápidas por mensagem, sem
precisar sair de casa nem esperar em fila." icon={<IoChatbubblesOutline size={32} color="#153229" />} fundo="bg-[#DCEFE4]" />

        <Card title="Lembretes inteligentes" description="Notificações de banho, remédio e retorno,
ajustadas à rotina de cada pet." icon={<SlClock size={32} color="#C85A32" />} fundo="bg-[#FDF0EA]" />

        <Card title="Loja de produtos" description="Ração, medicamentos e acessórios
recomendados, com entrega direto na sua
casa." icon={<MdOutlineLocalGroceryStore size={32} color="#C09A46" />} fundo="bg-[#FBF5E6]" />
      </div>
    </section>
  );
}
