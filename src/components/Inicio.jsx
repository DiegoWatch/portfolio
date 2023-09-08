import { HashLink as Link } from "react-router-hash-link";
import { FaFolder, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animation } from "../helpers";

export const Inicio = () => {

  const animate = animation();

  return (
    <section id="home" className="container2 grid grid-cols-2 m-auto pt-36 pb-20 text-center">
      <div data-aos={animate} className="">
        <h1 className="m-0 mb-4 font-bold pb-2 px-5 text-[4rem] text-purple leading-[1]">Diego Andrés Noriega Izquierdo</h1>
        <h2 className="m-0 text-white font-medium text-xl">Web FullStack Developer</h2>
        <div className="mt-10 flex justify-center gap-10">
          <div className="flex gap-2 items-center">
            <FaGithub className="text-2xl" />
            <Link to="#contact" smooth>Github</Link>
          </div>

          <div className="flex gap-2 items-center">
            <FaLinkedin className="text-2xl" />
            <Link to="#contact" smooth>Linkedin</Link>
          </div>

          <div className="flex gap-2 items-center">
            <FaFolder className="text-2xl" />
            <Link to="#contact" smooth>Contact Me</Link>
          </div>
        </div>
      </div>

      <div data-aos={animate} className="flex flex-col gap-6 justify-center items-center">
          <img className="w-64 rounded-[50%] bg-purple p-1 shadow-2xl animate-img" src="/img/perfil.png" alt="I'm Diego Noriega" />
          <div className="w-[30%] h-3 bg-gris rounded-[50%]"></div>
      </div>
    </section>
    // <section className="home p-20 text-center">
    //     <h1 className="m-0 font-bold pb-2 text-blue-light-1">Diego Andrés Noriega Izquierdo</h1>
    //     <h2 className="m-0 font-medium text-xl text-blue-light-1">Desarrollador Web FullStack</h2>
    // </section>
  )
}
