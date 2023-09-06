import { Inicio, Navbar, About, Skill, Projects, Contact } from "../components";

export const PortfolioPage = () => {
  return (
    <>
        <Navbar />
        <Inicio />
        <About />
        <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-blue-dark to-blue-light-1 w-[85%] h-[2px] rounded-xl"></div>
        </div>
        <Skill />
        <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-blue-dark to-blue-light-1 w-[85%] h-[2px] rounded-xl"></div>
        </div>
        <Projects />
        <Contact />
    </>
  )
}
