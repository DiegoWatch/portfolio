
export const Skill = () => {

  const array = ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain',
                 'devicon-react-original', 'devicon-php-plain', 'devicon-sass-original',
                 'devicon-tailwindcss-original-wordmark', 'devicon-python-plain'];


  return (
    <section className="skill bg-blue-light-1 p-10">
      <h2 className="text-center font-bold pb-10 text-5xl">Skill Set</h2>

      <div className="container m-auto flex flex-wrap justify-center gap-10">
        {
          array.map((icon, index) => (
            <i key={index} className={`${icon} text-8xl text-blue-dark hover:scale-110 transition`}></i>
          ))
        }
      </div>
    </section>
  )
}
