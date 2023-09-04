
export const Cards = ({img, texto, url}) => {
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
    <div className="card">
        <div>
            <img className="w-full rounded-t-lg" src={img} alt="img" />
        </div>

        <div className="text-center rounded-lg p-5">
            <p className="text-lg mb-4">{texto}</p>
            <a className="bg-blue-light-1 p-5 font-semibold block rounded-xl text-lg hover:scale-105 transition-all" href={url}>Ir al proyecto</a>
        </div>
    </div>
  )
}