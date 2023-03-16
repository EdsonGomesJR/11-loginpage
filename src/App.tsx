import { FormEvent, useState } from "react";

import logo from "./assets/logo.svg";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock, EyeSlash } from "phosphor-react";

function App() {
  const [email, setEmail] = useState("");
  const [veryfiedEmail, setVeryfiedEmail] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      setVeryfiedEmail(true);
    } else {
      setVeryfiedEmail(false);
    }
  }
  function verifyEmail(email: string) {
    if (email.length < 10) {
      console.log("digitou +4 digitos");

      setEmail(email);
    } else {
      console.log("Verificando o texto digitado...");
      setEmail(email);
    }
  }
  return (
    <div className="lg:w-[90rem] lg:h-[56.25rem]">
      <div className="flex flex-col justify-between h-full ">
        <header className="w-full bg-bgDefault bg-no-repeat bg-cover bg-center h-24 lg:hidden" />
        <div className=" flex items-center bg-gray50 h-full flex-col lg:grid lg:grid-cols-2 lg:items-start ">
          <div className="grid place-items-center p-2 text-center lg:place-items-start gap-4  ">
            <div className="flex items-center gap-2 p-4 mt-6 lg:mt-8 lg:p-6 lg:gap-1 ">
              <img
                src={logo}
                width={40}
                height={40}
                alt="Brand icon named Vertigo"
              />
              <span className="text-5xl lg:text-4xl font-bold">Vertigo</span>
            </div>
            <div className="flex gap-4 flex-col lg:ml-5  lg:w-96 items-center lg:items-start">
              <h1 className="font-bold text-4xl text-gray800 lg:text-4xl">
                Acesse a plataforma
              </h1>
              <p className="text-gray600 w-2/3 md:w-full lg:text-base">
                Faça login ou registre-se para começar a construir seus projetos
                ainda hoje.
              </p>

              <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col w-full p-4 pt-2 gap-4 "
              >
                <div className="flex flex-col gap-1 ">
                  <span className="place-self-start text-gray800 font-semibold">
                    Email
                  </span>
                  <TextInput.Root
                    className={` ${
                      veryfiedEmail
                        ? "border-[#ED3A5A] focus-within:ring-0"
                        : ""
                    }`}
                  >
                    <TextInput.Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // type="email"
                      id="email"
                      placeholder="Digite seu e-mail"
                    />
                  </TextInput.Root>
                  <span
                    className={`flex ml-2 text-xs  text-[#ED3A5A] ${
                      veryfiedEmail ? "flex" : "hidden"
                    }`}
                  >
                    Digite um e-mail válido
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between ">
                    <span className="text-gray800 font-semibold">Senha</span>

                    <span className=" text-purple hover:cursor-pointer hover:underline">
                      Esqueceu a senha?
                    </span>
                  </div>
                  <TextInput.Root>
                    <TextInput.Input
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"
                    />
                    <TextInput.Icon>
                      <EyeSlash />
                    </TextInput.Icon>
                  </TextInput.Root>
                </div>

                <button
                  className={`hover:cursor-pointer py-4 px-3 rounded-lg mt-4 text-white bg-purple hover:bg-[#9F67FF]`}
                >
                  Entrar
                </button>
              </form>
            </div>

            <div className="mt-2 bg-yellow-200">
              <span className="text-gray600">Ainda não tem uma conta?</span>{" "}
              <span className="text-purple font-bold hover:underline hover:cursor-pointer">
                Inscreva-se!
              </span>
            </div>
          </div>
          <div className="bg-bgDefault w-full h-full bg-no-repeat bg-cover lg:block hidden" />
        </div>

        <footer className="w-full bg-bgDefault bg-no-repeat bg-cover bg-center rotate-180  h-24 lg:hidden " />
      </div>
    </div>
  );
}

export default App;
