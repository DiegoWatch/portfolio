import { animation } from "../helpers";

export const About = () => {

    const animate = animation();

  return (
    <section id="about" className="about pt-24 pb-10">

        <div className="container2 m-auto">
            <div className="grid md:grid-cols-[40%_20%_40%] p-2">

                <div data-aos={animate}>
                    <h2 className="bg-gradient-to-t max-md:text-center from-orange to-yellow bg-clip-text text-transparent font-bold mb-10 text-5xl">About</h2>
                    <p className="text-lg mb-16">Two age of experience working at the CUC University creating differents solutions on educate plataforms</p>
                    {/* <p className="text-lg text-blue-dark"></p> */}
                </div>

                <div className="flex justify-center">
                    <div className="bg-gradient-to-t from-orange to-yellow w-1 h-full rounded-3xl"></div>
                </div>

                <div data-aos={animate} className="flex flex-col md:items-center">
                    <h2 className="bg-gradient-to-t text-center from-orange to-yellow bg-clip-text text-transparent font-bold mb-10 text-5xl">Hobbies</h2>
                    <ul className="text-lg">
                        <li>Play VideoGames</li>
                        <li>Watch Anime & Series</li>
                        <li>Do Exercise</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
