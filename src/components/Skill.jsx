import { Icon } from "./Icon";

export const Skill = () => {

  const array = ['html5-plain', 'css3-plain', 'javascript-plain',
                 'react-original', 'sass-original','tailwindcss-original-wordmark', 
                 'php-plain', 'python-plain', 'mysql-plain-wordmark'];

  // const eliminar = (e) => {
  //   e.target.className += ' ocultar';
  // }


  return (
    <section id="skill" className="p-20">
      <h2 className="text-center bg-gradient-to-t from-orange to-yellow bg-clip-text text-transparent font-bold mb-10 text-5xl">Skill Set</h2>

      <div className="container2 m-auto flex flex-wrap justify-center gap-10">
        {
          array.map((icon, index) => (
            <Icon key={index} icon={icon}></Icon>
          ))
        }
      </div>
    </section>
  )
}
