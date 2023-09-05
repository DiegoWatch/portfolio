
export const Skill = () => {

  const array = ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain',
                 'devicon-react-original', 'devicon-sass-original','devicon-tailwindcss-original-wordmark', 
                 'devicon-php-plain', 'devicon-python-plain', 'devicon-mysql-plain-wordmark'];

  const eliminar = (e) => {
    e.target.className += ' ocultar';
  }


  return (
    <section id="skill" className="bg-blue-light-1 p-16">
      <h2 className="text-center font-bold pb-10 text-5xl">Skill Set</h2>

      <div className="container2 m-auto flex flex-wrap justify-center gap-10">
        {
          array.map((icon, index) => (
            <i key={index} onClick={eliminar} className={`${icon} text-8xl text-blue-dark hover:scale-110 transition`}></i>
          ))
        }
      </div>
    </section>
  )
}
