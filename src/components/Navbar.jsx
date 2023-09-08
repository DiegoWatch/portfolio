import { HashLink as Link} from 'react-router-hash-link';

export const Navbar = () => {

    const nav = [
        ['Home', '#home'],
        ['About', '#about'],
        ['Projects', '#projects'],
        ['Skill Set', '#skill'],
        ['Contact', '#contact'],
    ];

  return (
    <header className="fixed w-full shadow-2xl z-50">
        <div className='relative'>
            <div className="container2 relative m-auto flex justify-between items-center p-4 z-10">
                <div className="text-white size text-2xl font-bold tracking-[-0.5px]">
                    <a href="/">
                        &#60;Diego Noriega /&#62;
                    </a>
                </div>

                <nav className="flex gap-3">
                    {nav.map(([title, url]) => (
                        <Link key={title} smooth to={url} className="text-white font-medium">{title}</Link>
                    ))}
                </nav>
            </div>

            <div className='backdrop-blur-lg w-full absolute top-0 left-0 h-full'></div>
        </div>

    </header>
  )
}
