import { animation } from "../helpers";
import { Icon } from "./Icon";

export const Cards = ({img, texto, url, icons = []}) => {

  const animate = animation();

  return (
    // <div className="card">
    //     <div>
    //         <img className="w-full rounded-t-lg" src={img} alt="img" />
    //     </div>

    //     <div className="text-center rounded-lg p-5">
    //         <p className="text-lg mb-4">{texto}</p>
    //         <a className="bg-blue-light-1 p-5 font-semibold block rounded-xl text-lg hover:scale-105 transition-all" href={url}>Ir al proyecto</a>
    //     </div>
    // </div>
    <div className="card bg-gris max-w-[493px]" data-aos={animate}>
        <div className="h-[200px] sm:h-[250px]">
            <img className="w-full rounded-t-lg object-cover h-full" src={img} alt="img" />
        </div>

        <div className="text-center rounded-lg p-5">
            <p className="text-lg mb-4">{texto}</p>
        </div>

        <div className="flex flex-col gap-8 justify-between items-center px-5 pb-5">
          <div className="flex gap-5 flex-wrap justify-center icons-proyect">
            {
              icons.map((icon ,index) => (
                <Icon key={index} icon={icon} />
              ))
            }
          </div>

          <div>
            <a target="_blank" className="bg-gradient-to-t text-center from-orange to-yellow px-5 py-2 font-semibold block rounded-xl text-lg hover:scale-105 transition-all" href={url}>Go to Proyect</a>
          </div>
        </div>
    </div>
  )
}
