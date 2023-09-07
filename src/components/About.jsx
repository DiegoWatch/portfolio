import { animation } from "../helpers";

export const About = () => {

    const animate = animation();

  return (
    // <section id="about" className="about bg-blue-dark-1 p-10">
    //     <h2 className="text-center font-bold pb-10 text-5xl">About</h2>

    //     <div className="container2 m-auto">
    //         <div className="grid grid-cols-2">
    //             <div className="flex justify-center items-center">
    //                 <img className="w-64" src="/img/user.png" alt="I'm Diego Noriega" />
    //             </div>

    //             <div>
    //                 <p className="text-lg">Soy desarrollador web tanto de front-end como back-end. Me gusta todo lo que tiene que ver con el desarrollo de páginas web por lo que investigo a menudo como puedo mejorar en estas tecnologías.</p>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    <section id="about" className="about pt-24 pb-10">

        <div className="container2 m-auto">
            <div data-aos={animate} className="grid gap-16 md:grid-cols-2 md:gap-0 p-2">
                <div className="flex justify-center items-center">
                    <img className="w-64 rounded-[50%] border-4 border-purple-dark border-solid shadow-2xl" src="/img/perfil.png" alt="I'm Diego Noriega" />
                </div>

                <div data-aos={animate}>
                    <h2 className=" text-purple-dark-1 font-bold pb-10 text-5xl">About</h2>
                    <p className="text-lg text-purple-dark mb-16">Desarrollador web fullStack e Ingeniero de Sistemas. Me gusta todo lo que tiene que ver con el desarrollo de páginas web por lo que investigo a menudo como puedo mejorar en estas tecnologías.</p>

                    <h2 className=" text-purple-dark-1 font-bold pb-10 text-5xl">Hobbies</h2>
                    <ul className="text-purple-dark text-lg">
                        <li>Play VideoGames</li>
                        <li>Watch Anime & Series</li>
                        <li></li>
                    </ul>

                    {/* <p className="text-lg text-blue-dark"></p> */}
                </div>
            </div>
        </div>
    </section>
  )
}
