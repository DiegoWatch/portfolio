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
            <div className="grid gap-16 md:grid-cols-[40%_20%_40%] md:gap-0 p-2">

                <div data-aos={animate}>
                    <h2 className="bg-gradient-to-t from-orange to-yellow bg-clip-text text-transparent font-bold mb-10 text-5xl">About</h2>
                    <p className="text-lg mb-16">Two age of experience working at the CUC University creating differents solutions on educate plataforms</p>
                    {/* <p className="text-lg text-blue-dark"></p> */}
                </div>

                <div className="flex justify-center">
                    <div className="bg-gradient-to-t from-orange to-yellow w-1 h-full rounded-3xl"></div>
                </div>

                <div data-aos={animate} className="flex flex-col items-center">
                    <h2 className="bg-gradient-to-t from-orange to-yellow bg-clip-text text-transparent font-bold mb-10 text-5xl">Hobbies</h2>
                    <ul className="text-lg">
                        <li>Play VideoGames</li>
                        <li>Watch Anime & Series</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
