import { Icon } from "./Icon";

export const Skill = () => {

  const array = ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain',
                 'devicon-react-original', 'devicon-sass-original','devicon-tailwindcss-original-wordmark', 
                 'devicon-php-plain', 'devicon-python-plain', 'devicon-mysql-plain-wordmark'];

  // const eliminar = (e) => {
  //   e.target.className += ' ocultar';
  // }


  return (
    <section id="skill" className="pt-20 pb-10">
      <h2 className="text-center text-blue-dark-1 font-bold pb-10 text-5xl">Skill Set</h2>

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
