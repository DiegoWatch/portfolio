import { animation } from "../helpers";

export const Icon = ({icon}) => {

    const animate = animation();

    const eliminarClase = (e) => {
      let cadena = e.target.className;
      cadena = cadena.replace(new RegExp('colored', 'g'), '');
      e.target.className = cadena;
    }

  return (
    <div data-aos={animate}>
      <i 
        className={`${icon} text-8xl text-blue-dark transition`} 
        onMouseOver={(e) => e.target.className += ' colored'}
        onMouseLeave={eliminarClase}
      ></i>
    </div>
  )
}
