import { HashLink as Link } from "react-router-hash-link"

export const Inicio = () => {
  return (
    <section id="home" className="home bg-gradient-to-t from-purple-dark-1 to-rose-light-1 pt-36 pb-20 text-center">
        <h1 className="m-0 text-white font-bold pb-2 px-5">Diego Andrés Noriega Izquierdo</h1>
        <h2 className="m-0 text-white font-medium text-xl">Desarrollador Web FullStack</h2>

        <div className="mt-10">
          <Link to="#contact" smooth className="p-5 bg-purple-dark inline-block rounded-xl">Contact Me</Link>
        </div>
    </section>
    // <section className="home p-20 text-center">
    //     <h1 className="m-0 font-bold pb-2 text-blue-light-1">Diego Andrés Noriega Izquierdo</h1>
    //     <h2 className="m-0 font-medium text-xl text-blue-light-1">Desarrollador Web FullStack</h2>
    // </section>
  )
}
