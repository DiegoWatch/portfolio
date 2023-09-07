
export const Contact = () => {
  return (
    // <section id="contact" className="contact p-10 bg-blue-light-1">
    //     <h2 className="text-center font-bold pb-10 text-5xl">Contact</h2>

    //     <form className="bg-blue-dark-1 w-[800px] m-auto py-8 rounded-xl">
    //         <div className="w-full flex justify-center mb-4">
    //             <input className="p-2 rounded-xl bg-transparent text-blue-light placeholder:text-blue-light w-11/12 outline-none border-2 border-blue-light-1" type="text"  placeholder="Nombre: "/>
    //         </div>

    //         <div className="w-full flex justify-center mb-4">
    //             <input className="p-2 rounded-xl bg-transparent text-blue-light placeholder:text-blue-light w-11/12 outline-none border-2 border-blue-light-1" type="email"  placeholder="Email: "/>
    //         </div>

    //         <div className="w-full flex justify-center mb-8">
    //             <textarea className="p-2 rounded-xl bg-transparent text-blue-light placeholder:text-blue-light w-11/12 outline-none border-2 border-blue-light-1" placeholder="Mensaje: " cols="30" rows="10" />
    //         </div>

    //         <div className="flex justify-center">
    //             <button type="submit" className="p-3 bg-blue-light-1 rounded-xl">
    //                 Enviar Datos
    //             </button>
    //         </div>
    //     </form>
    // </section>
    <section id="contact" className="p-10 bg-rose-light-1">
        <h2 className="text-center font-bold pb-10 text-5xl">Contact</h2>

        <form className="bg-purple-dark-1  md:w-[750px] m-auto py-8 rounded-xl form-contact">
            <div className="w-full flex justify-center mb-4">
                <input className="p-2 rounded-xl bg-transparent w-11/12 outline-none" type="text"  placeholder="Nombre: "/>
            </div>

            <div className="w-full flex justify-center mb-4">
                <input className="p-2 rounded-xl bg-transparent w-11/12 outline-none" type="email"  placeholder="Email: "/>
            </div>

            <div className="w-full flex justify-center mb-8">
                <textarea className="p-2 rounded-xl bg-transparent w-11/12 outline-none" placeholder="Mensaje: " cols="30" rows="10" />
            </div>

            <div className="flex justify-center">
                <button type="submit" className="p-3 bg-rose-light-1 rounded-xl">
                    Enviar Datos
                </button>
            </div>
        </form>
    </section>
  )
}
