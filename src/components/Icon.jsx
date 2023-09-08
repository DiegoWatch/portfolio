import { animation } from "../helpers";

export const Icon = ({icon}) => {

    const animate = animation();

    const eliminarClase = (e) => {
      let cadena = e.target.className;
      cadena = cadena.replace(new RegExp('colored', 'g'), '');
      e.target.className = cadena;
    }

  return (
    <div data-aos={animate} className="bg-gris p-5 rounded-lg">
      <i 
        className={`${icon} text-8xl text-white transition`} 
        onMouseOver={(e) => e.target.className += ' colored'}
        onMouseLeave={eliminarClase}
      ></i>
    </div>
  )
}
