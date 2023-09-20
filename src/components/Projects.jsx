import { Cards } from "./Cards"

export const Projects = () => {
  return (
    <section id="projects" className="px-10 py-20">
        <h2 className="text-center bg-gradient-to-t from-orange to-yellow bg-clip-text text-transparent pb-1 font-bold mb-10 text-5xl">Projects</h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 place-items-center container2 m-auto gap-16">
            <Cards 
                texto={'Este proyecto trata sobre una encuesta en una universidad sobre como los profesores perciben el curso que se les asigno'}
                url={'https://mcencuesta.ced.com.co'}
                img={'/img/encuesta.png'}
                icons={['react-original', 'php-plain','mysql-plain-wordmark']} 
            />
            <Cards 
                texto={'Este proyecto se basa en el front-end realizado en una plataforma educativa que utiliza moodle porque bla bla bla'}
                url={'https://aulavirtual.cuc.edu.co'}
                img={'/img/aulavirtual3.png'} 
                icons={['html5-plain','sass-original', 'javascript-plain']} 
            />
            <Cards 
                texto={'Página web informativa para un departamento de la universidad'}
                url={'https://mcencuesta.ced.com.co'}
                img={'/img/ced.png'}
                icons={['html5-plain','sass-original', 'javascript-plain']}  
            />
            <Cards 
                texto={'Página web para que los estudiantes puedan consultar la fecha de su prueba'}
                url={'https://fechagenerica.ced.com.co'}
                img={'/img/generica.png'}
                icons={['react-original', 'php-plain','mysql-plain-wordmark']}  
            />
        </div>
    </section>
  )
}
