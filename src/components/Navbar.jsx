import { HashLink as Link} from 'react-router-hash-link';
import { Xmark } from '../icons/Xmark';
import { useEffect, useState } from 'react';

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const nav = [
        ['Home', '#home'],
        ['About', '#about'],
        ['Projects', '#projects'],
        ['Skill Set', '#skill'],
        ['Contact', '#contact'],
    ];
    
  return (
    <>
        <header className="fixed w-full shadow-2xl z-10">
            <div className='relative'>
                <div className="container2 relative m-auto flex justify-between items-center p-4 z-10">
                    <div className="text-white size text-2xl font-bold tracking-[-0.5px]">
                        <a href="/">
                            &#60;Diego Noriega /&#62;
                        </a>
                    </div>

                    <nav className="flex gap-3">
                        <div className='hidden gap-3 md:flex'>
                            {nav.map(([title, url]) => (
                                <Link key={title} smooth to={url} className="text-white font-medium">{title}</Link>
                            ))}
                        </div>

                        <div className='menuMobile md:hidden' onClick={() => setShowMenu(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>

                <div className='backdrop-blur-lg w-full absolute top-0 left-0 h-full'></div>
            </div>

        </header>

        <div className={`fixed md:hidden top-0 w-full h-full z-[11] transition-all ${(showMenu) ? 'bg-[#000] bg-opacity-50' : 'fadeBackMenu'} `}>
            <div className='flex justify-end'>
                <div className={`flex relative flex-col justify-center w-40 h-screen shadow-white bg-[#353232] shadow-2xl transition-transform ${(showMenu) ? 'translate-x-0' : 'translate-x-52'}`}>
                    <Xmark className={'absolute top-4 left-3 fill-white text-3xl'} onClick={() => setShowMenu(false) }/>
                    {nav.map(([title, url]) => (
                        <Link key={title} smooth to={url} className="text-white text-center font-medium px-10 py-5">{title}</Link>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
