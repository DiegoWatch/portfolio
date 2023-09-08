import { Inicio, Navbar, About, Skill, Projects, Contact } from "../components";

export const PortfolioPage = () => {
  return (
    <>
        <Navbar />
        <Inicio />
        <About />
        <Projects />
        <Skill />
        <Contact />
        {/* <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-purple-dark to-rose-light-1 w-[85%] h-[2px] rounded-xl"></div>
        </div>
        
        <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-purple-dark to-rose-light-1 w-[85%] h-[2px] rounded-xl"></div>
        </div>
         */}
    </>
  )
}
