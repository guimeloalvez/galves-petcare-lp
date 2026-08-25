import { ReactElement } from "react";
 
interface CardProps {
    title: string;
    description: string;
    icon: React.ReactElement;
}

export default function Card({ title, description, icon }: CardProps) {
    return(
        <div className="bg-white border border-[#ccc] rounded-lg p-8 max-w-100">
          <div className="bg-[#DCEFE4] rounded-2xl p-2 w-12">
            {icon}
          </div>

          <p className="mt-6 font-bold text-[18px]">{title}</p>

          <p className="mt-4">
          {description}
          </p>
        </div>
    )
}