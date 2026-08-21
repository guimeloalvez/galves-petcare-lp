import { FaStar } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="bg-[#FAF7F2] text-center px-5 py-16 md:py-24 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">

            <div className="flex items-center gap-1.5 bg-[#E2F0EA] text-[#2C624B] font-semibold text-xs py-1.5 px-4 rounded-full mb-6">
                <span>🐾</span>
                <span>Feito para tutores atentos</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-black text-[#153229] tracking-tight leading-tight max-w-3xl mb-6">
                Toda a rotina do seu pet, <br className="hidden md:inline" />
                <span className="text-[#FF6B4A]">numa coleira só.</span>
            </h1>

            <p className="text-sm md:text-base text-[#5C6E68] max-w-xl leading-relaxed mb-10">
                Agende consultas, acompanhe vacinas e fale com veterinários sem sair do app. O PetCare organiza o que seu pet precisa, antes de você precisar lembrar.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
                <a 
                    href="#" 
                    className="w-full sm:w-auto bg-[#FF6B4A] hover:bg-[#e05a3c] text-white font-semibold text-sm md:text-base py-3.5 px-8 rounded-full shadow-[0_10px_25px_-5px_rgba(255,107,74,0.4)] transition-all"
                >
                    Ver funcionalidades
                </a>
                <a 
                    href="#" 
                    className="w-full sm:w-auto bg-[#F2EDE4] hover:bg-[#e7e0d5] text-[#153229] font-semibold text-sm md:text-base py-3.5 px-8 rounded-full border border-[rgba(21,50,41,0.08)] transition-all"
                >
                    Falar com um veterinário
                </a>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-16 max-w-2xl border-t border-[rgba(21,50,41,0.08)] pt-8 w-full">
                <div>
                    <p className="text-xl md:text-2xl font-black text-[#153229]">12 mil+</p>
                    <p className="text-[10px] md:text-xs text-[#7A8C85] mt-1">pets cadastrados</p>
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-black text-[#153229] flex items-center justify-center gap-1">
                        4.9 <FaStar className="text-[#153229] text-sm md:text-lg mb-1" />
                    </p>
                    <p className="text-[10px] md:text-xs text-[#7A8C85] mt-1">avaliação média</p>
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-black text-[#153229]">24/7</p>
                    <p className="text-[10px] md:text-xs text-[#7A8C85] mt-1">suporte via chat</p>
                </div>
            </div>
        </section>
    );
}
