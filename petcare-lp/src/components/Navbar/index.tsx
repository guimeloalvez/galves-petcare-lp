import { MdOutlinePets } from 'react-icons/md';
import { MdAddCircleOutline } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="px-5 md:px-20 py-6 flex items-center justify-between border-b border-b-[rgba(21,50,41,0.14)]">
            <div className="flex gap-2">
                <MdOutlinePets size={24} color="#3F9271" />
                <p className="font-black text-[#153229]">pet</p>
                <p className="font-black text-[#FF6B4A]">care</p>
            </div>

            <nav>
                <ul className="flex items-center gap-5 md:gap-10">
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1F4136]">Inicio</a>
                    </li>
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1F4136]">Funcionalidades</a>
                    </li>
                    <li>
                        <a href="" className="text-xs md:text-base text-[#1F4136]">Contato</a>
                    </li>
                </ul>
            </nav>

            <a href="" className="hidden md:block bg-[#182420] text-white font-medium text-sm py-2.5 px-8 rounded-full shadow-2xl">Agendar consulta</a>
            <a href="" className="block md:hidden bg-[#182420] p-1.5 rounded-full"><MdAddCircleOutline color="#fff" size={14}/></a>
        </header>
    );
}