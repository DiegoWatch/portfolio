import { HashLink as Link} from 'react-router-hash-link';

export const Navbar = () => {

    const nav = [
        ['Home', '#home'],
        ['About', '#about'],
        ['Skill Set', '#skill'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
    ];

  return (
    <header className="bg-purple-dark fixed w-full shadow-2xl z-50">
        <div className="container2 m-auto flex justify-between items-center p-4">
            <div className="text-white size text-2xl font-bold tracking-[-0.5px]">
             &#60;Diego Noriega /&#62;
            </div>

            <nav className="flex gap-3">
                {nav.map(([title, url]) => (
                    <Link key={title} smooth to={url} className="text-white font-medium">{title}</Link>
                ))}
            </nav>
        </div>

        {/* <div className="flex justify-between items-center w-[1200px] m-auto mt-10">
            <div className="flex flex-col items-center p-10 gap-2 relative">
                <h1 className="text-white font-bold m-0 z-10 relative">Soy Diego Noriega</h1>
                <p className="text-white font-bold z-10 relative">Desarrollador FullStack</p>
                <div class="absolute top-0 left-0 w-full h-full backdrop-blur-[9px] rounded-lg"></div>
            </div>

            <div className="w-20 h-20 rounded-full bg-white">
                
            </div>
        </div> */}
    </header>
  )
}
