
export const About = () => {
  return (
    <section className="about bg-blue-dark-1 p-10">
        <h2 className="text-center font-bold pb-10 text-5xl">About</h2>

        <div className="container m-auto">
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                    <img className="w-64" src="/img/user.png" alt="I'm Diego Noriega" />
                </div>

                <div>
                    <p className="text-lg">Soy desarrollador web tanto de front-end como back-end. Me gusta todo lo que tiene que ver con el desarrollo de páginas web por lo que investigo a menudo como puedo mejorar en estas tecnologías.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
