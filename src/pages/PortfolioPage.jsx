import { Inicio, Navbar, About, Skill, Projects, Contact, Footer } from "../components";

export const PortfolioPage = () => {
  return (
    <>
        <Navbar />
        <Inicio />
        <About />
        <div className="flex justify-center mt-20 container2">
            <div className="bg-gradient-to-r from-orange to-yellow w-full h-[2px] rounded-xl"></div>
        </div>
        <Projects />
        <div className="flex justify-center mt-20 container2">
            <div className="bg-gradient-to-r from-orange to-yellow w-full h-[2px] rounded-xl"></div>
        </div>
        <Skill />
        {/* <div className="flex justify-center mt-20 container2">
            <div className="bg-gradient-to-r from-orange to-yellow w-full h-[2px] rounded-xl"></div>
        </div>
        <Contact /> */}
        <Footer />
    </>
  )
}
