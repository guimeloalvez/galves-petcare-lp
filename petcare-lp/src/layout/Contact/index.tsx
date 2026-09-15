import { useState } from "react";
import { FaCommentDots, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_nlso9lk",
        "template_2njaq01",
        templateParams,
        "_8OtCDs5Puh42Nu1D",
      )
      .then((response) => {
        console.log("email enviado: ", response.status);
      });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }
  return (
    <section className="mx-20 my-40 rounded-3xl bg-white border border-[#ccc] flex overflow-hidden">
      <div className="bg-[#153229] py-10 pl-10 pr-10 w-full max-w-md">
        <p className="text-white bg-white/10 w-fit text-center rounded-full text-xs py-2 px-4">
          Fale com a gente
        </p>
        <p className="font-bold text-white text-3xl max-w-70 my-5">
          Alguma dúvida sobre o Petcare?
        </p>
        <p className="text-[#ccc] max-w-90 mb-10">
          Preencha o formulário e nosso time entra em contato em até 1 dia útil.
          Pra urgências, use o chat 24h.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2.5 rounded-lg flex items-center justify-center">
              <FaCommentDots size={16} color="#fff" />
            </div>
            <p className="text-white">contato@petcare.app</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2.5 rounded-lg flex items-center justify-center">
              <FaHeart size={16} color="#fff" />
            </div>
            <p className="text-white">(48) 99999-0000</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2.5 rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt size={16} color="#fff" />
            </div>
            <p className="text-white">Florianópolis, SC</p>
          </div>
        </div>
      </div>

      <div className="p-10 flex-1">
        <form onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex-1">
              <p className="mb-1 font-medium">Nome</p>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-[#fbf9f4] border border-[#ccc] rounded-lg p-3 w-full"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex-1">
              <p className="mb-1 font-medium">E-mail</p>
              <input
                type="email"
                placeholder="voce@email.com"
                className="bg-[#fbf9f4] border border-[#ccc] rounded-lg p-3 w-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div>
            <p className="mb-1 font-medium">Telefone</p>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="bg-[#fbf9f4] border border-[#ccc] rounded-lg p-3 w-full"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          <div>
            <p className="mb-1 font-medium">Mensagem</p>
            <textarea
              placeholder="Conte pra gente como podemos ajudar"
              rows={5}
              className="bg-[#fbf9f4] border border-[#ccc] rounded-lg p-3 w-full resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <button
            value="Enviar"
            type="submit"
            className="bg-[#EB6A4C] cursor-pointer shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)] text-white font-semibold rounded-full py-3 w-full"
          >
            Enviar mensagem
          </button>

          <p className="text-xs text-gray-500">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>
      </div>
    </section>
  );
}
