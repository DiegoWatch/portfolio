import { HashLink as Link } from "react-router-hash-link";
import { FaFolder, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animation } from "../helpers";

export const Inicio = () => {

  const animate = animation();

  return (
    <section id="home" className="container2 home grid gap-16 md:grid-cols-2 m-auto pt-36 pb-12 text-center">
      <div data-aos={animate} className="c1">
        <h1 className="m-0 mb-4 font-bold pb-2 px-5 text-[2.5rem] md:text-[4rem] bg-gradient-to-t from-orange to-yellow bg-clip-text text-transparent leading-[1]">Diego Andrés Noriega Izquierdo</h1>
        <h2 className="m-0 text-white font-medium text-xl">Web FullStack Developer</h2>
        <div className="mt-10 flex justify-center gap-10">
          <div className="flex gap-2 items-center transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
            <FaGithub className="text-2xl" />
            <a target="_blank" href="https://github.com/DiegoWatch">Github</a>
          </div>

          <div className="flex gap-2 items-center transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
            <FaLinkedin className="text-2xl" />
            <a target="_blank" href="https://www.linkedin.com/in/diego-noriega-50712b291/">Linkedin</a>
          </div>

          {/* <div className="flex gap-2 items-center">
            <FaFolder className="text-2xl" />
            <Link to="#contact" smooth>Contact Me</Link>
          </div> */}
        </div>
      </div>

      <div data-aos={animate} className="c2 flex flex-col gap-6 justify-center items-center">
          <img className="w-64 rounded-[50%] bg-gradient-to-t from-orange to-yellow p-1 shadow-2xl animate-img" src="/img/perfil.png" alt="I'm Diego Noriega" />
          <div className="w-[30%] h-3 bg-gris rounded-[50%]"></div>
      </div>
    </section>
    // <section className="home p-20 text-center">
    //     <h1 className="m-0 font-bold pb-2 text-blue-light-1">Diego Andrés Noriega Izquierdo</h1>
    //     <h2 className="m-0 font-medium text-xl text-blue-light-1">Desarrollador Web FullStack</h2>
    // </section>
  )
}
