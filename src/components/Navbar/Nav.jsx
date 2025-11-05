import { useState } from 'react';
import { Link } from 'react-router';
import userInfo from '../../assets/userInfo';
import NavLinks from './NavLinks.jsx';
import NavSections from './NavSections.jsx';

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <section id="Navigation" className='fixed top-0 w-full z-20'>
      <nav className='w-full md:border-b md:border-solid md:border-zinc-800 backdrop-blur-sm'>
        <div className='bg-[rgba(0,0,0,0.85)] text-zinc-200 flex items-center justify-between md:justify-center md:gap-48 p-3 md:p-0'>
          <div>
            <Link to="/" className='hidden md:inline md:text-2xl font-serif text-center' viewTransition>
              {userInfo.info.name}
            </Link>
            <Link to="/" className='md:hidden text-3xl font-[Italiana]' viewTransition>
              DH
            </Link>
          </div>
          <div className='flex items-end justify-center'>
            <NavLinks className="hidden md:flex" links="userInfo.links" onClick={() => setIsMenuActive(false)} />
            <button className='md:hidden hover:bg-[rgba(0,0,0,0.2)] p-3 rounded-full justify-self-end' onClick={() => setIsMenuActive(!isMenuActive)}>
              {isMenuActive ? <i className='fa-solid fa-x text-2xl'></i> : <i className='fa-solid fa-bars text-2xl'></i>}
            </button>
          </div>
        </div>
        <div className={`w-full z-10 transition-all duration-300 ease-in-out overflow-hidden bg-[rgba(0,0,0,0.75)] backdrop-blur-lg text-zinc-200 md:hidden ${isMenuActive ? 'max-h-96' : 'max-h-0'}`}>
          <NavSections className="w-full flex flex-col" links="userInfo.sections" onClick={() => setIsMenuActive(false)} />
          <hr className="w-9/10 text-zinc-200 mx-auto" />
          <NavLinks className="w-full flex flex-col" links="userInfo.links" onClick={() => setIsMenuActive(false)} />
        </div>
        <NavSections className="w-full md:flex justify-center items-center justify-self-center gap-16 bg-sky-300/80 hidden" links="userInfo.sections" onClick={() => setIsMenuActive(false)} />
      </nav>
    </section>
  )
}

export default Nav;
