import { HashLink as Link } from "react-router-hash-link";
import { FaFolder, FaGithub, FaLinkedin, FaList, FaPhone, FaWpforms } from 'react-icons/fa';

export const Inicio = () => {
  return (
    <section id="home" className="container2 grid grid-cols-2 m-auto pt-36 pb-20 text-center">
      <div className="">
        <h1 className="m-0 text-white font-bold pb-2 px-5 text-[4rem]">Diego Andrés Noriega Izquierdo</h1>
        <h2 className="m-0 text-white font-medium text-xl">Desarrollador Web FullStack</h2>
        <div className="mt-10 flex gap-10">
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
            <Link to="#contact" smooth>Linkedin</Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
          <img className="w-64 rounded-[50%] border-4 border-purple-dark border-solid shadow-2xl" src="/img/perfil.png" alt="I'm Diego Noriega" />
      </div>
    </section>
    // <section className="home p-20 text-center">
    //     <h1 className="m-0 font-bold pb-2 text-blue-light-1">Diego Andrés Noriega Izquierdo</h1>
    //     <h2 className="m-0 font-medium text-xl text-blue-light-1">Desarrollador Web FullStack</h2>
    // </section>
  )
}
