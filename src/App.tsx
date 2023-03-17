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
    <div className="h-[100vh] ">
      <div className="flex flex-col justify-between h-full">
        <header className="w-full bg-bgDefault bg-no-repeat bg-cover bg-center h-24 lg:hidden" />
        <div className=" flex items-center bg-gray50 h-full flex-col lg:grid lg:grid-cols-2 lg:items-start ">
          <div
            className="grid place-items-center mt-10 project:ml-28 lg:ml-16
           text-center lg:place-items-start lg:mt-24 lg:justify-center  "
          >
            <div className="flex items-center project:gap-0 gap-2">
              <img
                src={logo}
                className="w-12 h-12 lg:w-10 lg:h-10"
                alt="Brand icon named Vertigo"
              />
              <span className="text-2xl lg:text-4xl project:text-5xl font-bold">
                Vertigo
              </span>
            </div>
            <div className="lg:flex mt-10 project:mt-[7.125rem] lg:flex-col lg:items-start lg:gap-4">
              <div className="flex  flex-col items-center lg:text-start lg:items-start lg:gap-4">
                <h1 className="font-bold text-4xl text-gray800 ">
                  Acesse a plataforma
                </h1>
                <p className="  lg:w-[70%] text-gray-400 project:mt-4 ">
                  Faça login ou registre-se para começar a construir seus
                  projetos ainda hoje.
                </p>
              </div>

              <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col lg:gap-4 lg:mt-6 lg:w-[80%] lg:p-0 p-4 gap-6 project:mt-10 project:w-96 project:gap-4 "
              >
                <div className="flex flex-col lg:gap-2">
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

                <div className="flex flex-col lg:gap-2 ">
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
                  className={`hover:cursor-pointer lg:mt-4 lg:text-[16px] lg:font-bold lg:leading-[24px] lg:flex lg:justify-center lg:px-6 lg:gap-[10px] lg:h-[53px] py-4 px-3 rounded project:mt-4 text-white bg-purple hover:bg-[#9F67FF]`}
                >
                  Entrar
                </button>
              </form>
              <div className="project:mt-4">
                <span className="text-gray600">Ainda não tem uma conta?</span>{" "}
                <span className="text-purple font-bold hover:underline hover:cursor-pointer">
                  Inscreva-se!
                </span>
              </div>
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
