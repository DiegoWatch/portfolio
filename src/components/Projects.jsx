import { Cards } from "./Cards"

export const Projects = () => {
  return (
    // <section className="projects bg-blue-dark-1 p-10">
    //     <h2 className="text-center font-bold pb-10 text-5xl">Projects</h2>

    //     <div className="grid sm:grid-cols-2 xl:grid-cols-3 container2 m-auto gap-16">
    //         <Cards 
    //             texto={'Este proyecto trata sobre una encuesta en una universidad sobre como los profesores perciben el curso que se les asigno'}
    //             url={''}
    //             img={'/img/encuesta.png'} 
    //         />
    //         <Cards 
    //             texto={'Este proyecto se basa en el front-end realizado en una plataforma educativa que utiliza moodle'}
    //             url={''}
    //             img={'/img/aulavirtual2.png'} 
    //         />
    //         <Cards 
    //             texto={'Este proyecto trata sobre una encuesta en una universidad sobre como los profesores perciben el curso que se les asigno'}
    //             url={''}
    //             img={'/img/encuesta.png'} 
    //         />
    //         <Cards 
    //             texto={'Este proyecto se basa en el front-end realizado en una plataforma educativa que utiliza moodle'}
    //             url={''}
    //             img={'/img/aulavirtual2.png'} 
    //         />
    //     </div>
    // </section>
    <section id="projects" className="pt-24 pb-32">
        <h2 className="text-center text-blue-dark-1 font-bold pb-10 text-5xl">Projects</h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 container2 m-auto gap-16">
            <Cards 
                texto={'Este proyecto trata sobre una encuesta en una universidad sobre como los profesores perciben el curso que se les asigno'}
                url={'https://mcencuesta.ced.com.co'}
                img={'/img/encuesta.png'} 
            />
            <Cards 
                texto={'Este proyecto se basa en el front-end realizado en una plataforma educativa que utiliza moodle'}
                url={'https://aulavirtual.cuc.edu.co'}
                img={'/img/aulavirtual3.png'} 
            />
            <Cards 
                texto={'Este proyecto trata sobre una encuesta en una universidad sobre como los profesores perciben el curso que se les asigno'}
                url={'https://mcencuesta.ced.com.co'}
                img={'/img/encuesta.png'} 
            />
            <Cards 
                texto={'Este proyecto se basa en el front-end realizado en una plataforma educativa que utiliza moodle'}
                url={'https://aulavirtual.cuc.edu.co'}
                img={'/img/aulavirtual3.png'} 
            />
        </div>
    </section>
  )
}
